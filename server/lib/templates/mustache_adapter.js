import mustache from 'mustache';

export default class MustacheAdapter {
  async render(template, context) {
    return mustache.render(template, context);
  }
}
