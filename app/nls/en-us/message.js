/*global define*/
define({
    SENDER_PLACEHOLDER : 'Write your message...',
    SEND_A_SMS : 'Message your friend...',
    SEND_TO : 'Send to {1}: ',
    LOAD_MORE : 'View more messages',
    SEND_MESSAGE : 'Send Message',

    RECEIVER : 'To: ',
    CONTENT : 'Message: ',

    CONTENT_COUNT : '{1} characters, ',
    CONTENT_COUNT2 : '{1}',
    MESSAGE_COUNT : 'May be sent as {1} separate messages,',
    CONTACTS_COUNT : 'will send to {1} contact(s)',
    BIRTHDAY_TIP : 'Today\'s his/her birthday, send your congrats! ',

    ME : 'Me',
    UNNAMED_CONTACT : 'Unknown contacts',
    NONE_SUBJECT : 'No subject',
    CONTAIN_MULTIMEDIA : 'Contains {1} multimedia attachment(s)',
    OPEN_ON_DEIVE : 'View on phone',
    EXPEND : 'Expand',
    SENDING : '(Sending...)',
    SEND_FAILED : 'Send failed ',
    SEND_FAILED_ALERT : 'Failed to send message',
    RESEND : ' Retry',
    FORWARD : 'Forward',
    COPY : 'Copy',
    ADD_TO_CONTACT : 'Add to contacts',
    BATCH_SEND_TITLE : 'Please press send on your phone',
    BATCH_SEND_TOO_MANY_TIP : 'Message created, please complete by sending on your phone. To ensure that all messages are sent, SnapPea limits messages sent from the PC to 90 per hour. You\'ve passed this limit.',

    DELETE_FAILD : 'Failed to delete',

    ADD_BATCH_RECEIVER : 'Send group message',
    ADD_BATCH_RECEIVER_TIP : 'Group messages can automatically replace recipient names. For example, send "John Doe" and "Jane Smith" a group message in this format: "Hi $NAME, Happy New Year!" Then John will see: "John Doe, Happy New Year!" Jane will see: "Jane Smith, Happy New Year!"',
    MESSAGE_TOO_LONG : 'Your messages will be separated into several separate messages. Continue to send?',

    REPLY_MESSAGE : 'Reply',
    PLEASE_INPUT_CONTENT : 'Enter message',
    PREV_MESSAGE : 'Previous',
    NEXT_MESSAGE : 'Next',
    MESSAGE_FROM : '{1} sent you a message',

    ADD_CONTACT : 'Select Contact',
    LOOK_UP_CONTACT : 'View contact',
    SEARCH_CONTACT : ' Search for a contact',
    CONTACT_SELECT : '{1} contacts selected ',
    CLEAR_ALL : ' Clear all',

    NO_CONTACT_UNDER_THIS_ACCOUNT : 'Current account no contacts',

    BATCH_SEND : 'Group',
    BATCH_SEND_TIP : '... And so on {1}.',
    NAMEPLATE_BATCH_SEND_TIP : '...and <span class="link list-switch">{1} others</span>',
    SEND_FAILED_TIP : '{1} failed to send',
    RESEND_ALL : 'Re-send all',

    SEND_SMS : 'Send &crarr;',
    MARK_AS_READ : 'Mark as read',
    SEND_MESSAGE_TO : 'Send to: ',

    EMPTY_TIP_4_CONTACT : 'No contact history found',
    COUNT_TIP : '(<span class="cover-count"></span> selected conversations, <span class="sms-count"></span> messages)',

    BATCH_CONVERSATION : 'Group messages',

    SMS_SUMMARY : '{1} message(s), {2} unread',

    CONFIRM_DELETE_CONVERSATION : 'Delete {1} conversation(s) and {2} message(s)? ',
    CONVERSATION_DELETE_SUCCESS : 'Deleted {1} message(s)',
    CONFIRM_MARK_AS_READ : 'Mark {1} conversation(s) as read? ',
    CONVERSATION_MARK_AS_READ_PROGRESS : 'Marking as read...',
    CONVERSATION_MARK_AS_READ_SUCCESS : 'Marked as read {1} message(s)',

    ALERT_TIP_EXPORT_MMS : 'Export will not include MMS messages',

    SEND : 'Send &crarr;',
    NEW_SMS : 'New message',
    BATCH_CONVERSATION_TITLE : 'All messages from {1} selected',
    //SEND_WITH_SPEC_SIM : '使用 卡 {1} 发送',
    //SEND_WITH_SPEC_SIM_HAS_NAME : '使用{1}号发送',
    //MUTIL_SIM_SELECT : '使用{1}号（卡 {2}）发送',
    //MUTIL_SIM_SELECT_HAS_NUM : '使用{1}号 {2} 发送',
    //MUTIL_SIM_SUPPORT : '由「多趣短信」提供双卡技术支持',
    //MUTIL_SIM_SUPPORT_LINK : '由<a class="duoqu" href="http://apps.wandoujia.com/apps/cn.com.xy.duoqu?pos=w/search/list//%E5%A4%9A%E8%B6%A3%E7%9F%AD%E4%BF%A1/2" target="_default">「多趣短信」</a>提供双卡技术支持',

    WINDOW_IMPORT_TITLE : 'Import Messages',
    IMPORT_FAILED : 'Failed to import messages',
    IMPORTING_SMS : 'Importing messages, please wait...',
    IMPORT_SMS_FINISH : 'Importing messages completed',
    DUPLICATE : '{1} duplicate message(s) ignored.',
    EXPORT_MESSAGE : 'Export Messages',
    EXPORT_FAILED : 'Failed to export messages',
    EXPORTING_SMS : 'Exporting messages, please wait...',
    EXPORT_SMS_FINISH : 'Exporting messages completed',
    IMPORT_SELECT_FILE : 'Select .csv files to import',
    EXPORT_SMS_CANCEL : 'Canceled messages export',
    INVALID_FILE : 'Invalid .csv file',
    SELECT_MESSAGE : 'Select messages to export',
    NO_CONVERSATION : 'You haven\'t received any messages yet',
    PROBLEM_WITH_DUAL_SIM_PHONE : 'Dual-SIM phone error',
    PROBLEM_WITH_DUAL_SIM_PHONE_TIP : '<p>If you\'re using a dual-SIM card phone, you can set one SIM card as your default for sending messages. <p> SnapPea might not support every kind of dual-SIM phone. If your phone is not recognized or unable to send messages, contact us <span class="button-feedback link"></span>',

    SELECT_BACKUP_FILE : 'Select auto backup file',
    BACKUP_MESSAGE_NUMBER : 'Messages',

    COPY_SMS : 'Message successfully copied to the Clipboard',

    RETURN_ALL : 'All messages',
    SEARCH_TIP : '{1} messages containing "{2}"',
    UNREAD_DES : '{1} unread messages',

    APPLY_DEFAULT_4_4 : 'You\'re using Android 4.4. To import text messages, set SnapPea as the "Default SMS App" in your phone\'s settings. Afterwards, return to the original settings.',
    UPDATA_USB_PROXY_4_4 : 'You\'re using Android 4.4. To import text messages, you need to update to the latest version of SnapPea.',
    RECOVER_DEAFULT_4_4 : 'To ensure that you can send text messages, please switch back to your original "Default SMS App."',
    DELET_TIP_4_4 : 'To delete text messages, set SnapPea as the "Default SMS App" in your phone\'s settings.',
    MARK_AS_READ_TIP_4_4 : 'To mark as read, set SnapPea as the "Default SMS App" in your phone\'s settings.',

    OPEN_ON_DEIVE_4_4 : 'Please view it on your phone'


    // SMART_DATE_TODAY : '今天 MM 月 dd 日',
    // SMART_DATE_YESTERDAY : '昨天 MM 月 dd 日',
    // SMART_DATE_TDBY : '前天 MM 月 dd 日',
    // SMART_DATE_SOME_DAY : 'MM 月 dd 日',
    // SMART_DATE_DIFF_YEAR : 'yyyy 年 MM 月 dd 日'
});