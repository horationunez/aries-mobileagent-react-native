import InboundMessageHandler from '../inboundMessages/inboundHandler'

import ProtocolHandlerInterface, {
  HandlerIdentifier,
  MessageRouteCallbacks,
} from './protocolHandlerInterface'

export default class BaseProtocolHandler implements ProtocolHandlerInterface {
  handlerIdentifier: HandlerIdentifier

  constructor(handlerIdentifier: HandlerIdentifier) {
    this.handlerIdentifier = handlerIdentifier

    console.info(
      `Created Protocol Handler with Identifier: '${this.handlerIdentifier}'`,
    )
  }

  registerMessages(messageCallbacks: MessageRouteCallbacks): void {
    try {
      console.info('Registering messages to callbacks: ', messageCallbacks)

      for (const route in messageCallbacks) {
        InboundMessageHandler.register(route, messageCallbacks[route])
      }
    } catch (error) {
      throw new Error('Unable to register protocols')
    }
  }
}
