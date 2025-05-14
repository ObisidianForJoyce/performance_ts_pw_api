import { Client, RequestOptions } from 'httpolyglot';
import { EventEmitter } from 'events';
import { URL } from 'url';

// Artillery 引擎接口定义
interface EngineOptions {
  target: string;
  config: any;
  scenarios: any[];
  phases: any[];
}

export default function (options: EngineOptions) {
  const emitter = new EventEmitter();
  const client = new Client();

  // 处理每个请求
  async function runScenario(scenario: any) {
    for (const step of scenario.flow) {
      if (step.post) {
        const { url, headers = {}, json } = step.post;
        const targetUrl = new URL(url, options.target);

        const requestOptions: RequestOptions = {
          method: 'POST',
          hostname: targetUrl.hostname,
          port: targetUrl.port || (targetUrl.protocol === 'https:' ? 443 : 80),
          path: targetUrl.pathname,
          headers: { ...headers, 'Content-Type': 'application/json' }, // 保留 Header 大小写
        };

        // 发送请求
        const req = client.request(requestOptions, (res) => {
          let data = '';
          res.on('data', (chunk) => (data += chunk));
          res.on('end', () => {
            emitter.emit('response', {
              statusCode: res.statusCode,
              headers: res.headers,
              body: data,
            });
          });
        });

        req.write(JSON.stringify(json));
        req.end();
      }
    }
  }

  // 启动测试
  options.scenarios.forEach(runScenario);
  return emitter;
}