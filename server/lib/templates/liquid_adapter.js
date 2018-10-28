import liquid from 'liquidjs';

const engine = liquid();

export default class LiquidAdapter {
  async render(template, context) {
    return await engine.render(template, context);
  }
}
