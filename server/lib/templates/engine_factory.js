import MustacheAdapter from './mustache_adapter';
import LiquidAdapter from './liquid_adapter';

export default class EngineFactory {
  static build(templateEngine = 'mustache') {
    switch (templateEngine) {
      case 'mustache':
        return new MustacheAdapter;

      case 'liquid':
        return new LiquidAdapter;

      default:
        throw new Error(`Template engine ${templateEngine} not supported.`);
    }
  }
}
