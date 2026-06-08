import unittest
import http.client
import json

class TestSmokeAllRoutes(unittest.TestCase):
    host = '127.0.0.1'
    port = 3007

    def request(self, method, path, body=None, headers=None):
        conn = http.client.HTTPConnection(self.host, self.port)
        conn.request(method, path, body=body, headers=headers or {})
        response = conn.getresponse()
        data = response.read()
        conn.close()
        return response.status, response.getheaders(), data

    def test_root_html(self):
        status, headers, data = self.request('GET', '/')
        self.assertEqual(status, 200)
        content_type = dict(headers).get('Content-Type', '')
        self.assertTrue(content_type.startswith('text/html'))
        self.assertIn(b'<html', data.lower())

    def test_index_html(self):
        status, headers, data = self.request('GET', '/index.html')
        self.assertEqual(status, 200)
        content_type = dict(headers).get('Content-Type', '')
        self.assertTrue(content_type.startswith('text/html'))
        self.assertIn(b'<html', data.lower())

    def test_nonexistent_file(self):
        status, headers, data = self.request('GET', '/nonexistentfile.html')
        self.assertEqual(status, 404)
        content_type = dict(headers).get('Content-Type', '')
        self.assertTrue(content_type.startswith('application/json'))
        payload = json.loads(data)
        self.assertIn('error', payload)

    def test_method_not_allowed(self):
        status, headers, data = self.request('PUT', '/')
        self.assertEqual(status, 405)
        content_type = dict(headers).get('Content-Type', '')
        self.assertTrue(content_type.startswith('application/json'))
        payload = json.loads(data)
        self.assertIn('error', payload)

    def test_api_openai_missing_key(self):
        # This test assumes no valid OPENAI_API_KEY is set in environment.
        # It tests the error response when key is missing.
        status, headers, data = self.request('POST', '/api/openai', body=json.dumps({"prompt": "Hello"}), headers={"Content-Type": "application/json"})
        self.assertEqual(status, 500)
        content_type = dict(headers).get('Content-Type', '')
        self.assertTrue(content_type.startswith('application/json'))
        payload = json.loads(data)
        self.assertIn('error', payload)

    def test_api_openai_missing_prompt(self):
        # This test assumes no valid OPENAI_API_KEY is set in environment.
        # It tests the error response when prompt is missing.
        status, headers, data = self.request('POST', '/api/openai', body=json.dumps({}), headers={"Content-Type": "application/json"})
        # It can be 500 or 400 depending on key presence, accept 400 here for prompt missing
        if status == 400:
            content_type = dict(headers).get('Content-Type', '')
            self.assertTrue(content_type.startswith('application/json'))
            payload = json.loads(data)
            self.assertIn('error', payload)
        else:
            self.assertEqual(status, 500)

if __name__ == '__main__':
    unittest.main()
