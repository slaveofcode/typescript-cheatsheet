
enum MessageType {
  SMS, // 0 
  WhatsApp, // 1
  Email, // 2
  PushNotification,
  ALL = MessageType.SMS | MessageType.WhatsApp | MessageType.Email | MessageType.PushNotification
}

enum MyMessageType {
  SMS = 'SMS',
  WhatsApp = 'WHATSAPP',
  Email = 'EMAIL',
  PushNotification = 'PUSH_NOTIFICATION',
  // ALL = MyMessageType.SMS | MyMessageType.WhatsApp
}

const msg: MessageType = MessageType.ALL
