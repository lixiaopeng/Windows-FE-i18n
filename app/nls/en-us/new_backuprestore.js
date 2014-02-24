/*global define*/
define({
    CONTACT : 'Contacts',
    SMS : 'Messages',
    APP : 'Apps',
    APP_DATA : 'App data',
    BR_TYPE_WORD_ENUM : ['', 'Contacts', 'Groups', 'Messages', 'MMS', 'Call history', 'Bookmarks', 'Settings', 'App files', 'App files', 'App data'],

    BACKUP_TITLE_LOCAL : 'Backup to computer',
    BACKUP_TITLE_REMOTE : 'Backup to cloud server',
    RESTORE_TITLE_LOCAL : 'Restore from computer',
    RESTORE_TITLE_REMOTE : 'Restore from cloud server',
    BACKUP_TITLE : 'Backup Data',
    RESTORE_TITLE : 'Restore Data',
    START_BACKUP : 'Start backup',
    START_RESTORE : 'Start restore',

    RESTORE_FINISH : '{1} restore completed',
    RESTORE_FAILED : '{1} restore failed',

    TIP_IN_WIFI : 'To prevent data loss, SnapPea does not support backup or restore via Wi-Fi.<br />Please connect your device via USB cable and try again',

    ERROR_WHEN_WRITE_ROM :  'Unable to detect your SD card... <br />Please confirm:<br />- "USB Mass Storage Mode" is turned off on your device.<br />- SD card is properly inserted into your device. <br />- Or, try inserting another SD card.',

    BACKUP_RESTORE_RUNING : 'Your device is currently backing up or restoring data.',
    BACKUP_TO_CLOUD_FAILED : 'Failed to backup to cloud server.',
    BACKUP_TO_CLOUD_FAILED_DETAIL : '{1} of {2} backups failed',
    RESTORE_INVLID_FILE : 'Invalid backup file, please try again',
    RESTORE_INVLID_CONTACTS_FILE : 'Invalid contacts file. If you want to import a single contact, please use the import feature in Contacts.',
    BACKUP_FILE : 'Backup file',

    RESTORE_CONNECTION_LOST : 'Unable to complete restore, your device was disconnected',
    SD_CARD_ERROR : 'Unable to write SD card. Please ensure that your SD card is not locked and that that it has enough free space',
    FILE_DOWNLOAD_ERROR : 'Failed to transfer files',
    CANCELED : 'Canceled operation',
    UNKNOW_ERROR : 'Unknown error',
    OPEN_BACKUP_FILE : 'Open backups folder',
    BACKUP_FINISH_LABEL : 'Backup completed',
    RESTORE_FINISH_LABEL : 'Restore completed',
    BACKUP_COMPRESSING : 'Compressing backup files, please wait...',
    RESTORE_PERMISSSION_TIP1 : 'Sorry, {1} restore failed',
    RESTORE_PERMISSSION_TIP2 : 'It seems you\'re using an app or ROM to control data permissions. Examples include Avast! or the MIUI ROM. Please authorize SnapPea to use the following permission: {1}',
    RESTORE_PERMISSSION_TIP3 : 'Have you stopped restoring all data?',
    RESTORE_PERMISSSION_PART_TIP1 : 'Unfortunately {1} of {2} restores failed',

    PERMISSION_TIP : 'Failed to read device\'s data. <br />It may be that a security app on your device is blocking SnapPea.',

    FILE_NAME_UNLEGAL :　'Invalid file name, please try again',
    GET_FILE_NAME_FAILED : 'Invalid backup file, please browse to select',
    SET_FILE_PATH_FAILED : 'Invalid file path, please select another one',
    SET_RESTORE_FILE_FAILED : 'Invalid backup file',

    FILE_PATH_INVALID : 'Invalid backup file name or folder, please try again',
    OVERWIRTE_EXISTS_FILE_TIP : 'Overwrite existing backup file?',
    BACKUP_FAILED_TIP : 'Backup failed:',
    RESTORE_FAILED_TIP : 'Restore failed:',
    BACKUP_ABORT_TIP : 'Backup aborted',
    RESTORE_ABORT_TIP : 'Connection lost between your computer and device. <br />SnapPea will continue the restore on your device, please check there.',
    APP_ERROR_LIST_TITLE : '{1} app(s) failed to backup.Ignore and continue to backup apps?',
    APP_DATA_ERROR_LIST_TITLE : '{1} apps failed to restore. Ignore?',

    RESTORE_LIST_SNAPHOST_FAILED : 'Failed to load app list',
    RESTORE_DEVICE : 'Device',

    RESTORE_CHOOSE_ACCOUNT_TIP : 'Backup contacts to which account? Please select:',
    RESTORE_DELETE_DATA_TIP : 'Don\'t want to delete any data? Choose to how to handle your restore.',
    RESTORE_DOWNLOAD_PROGRESSING : 'Downloading backup data from cloud servers, please wait...',

    BACKUP_APP_DATA_TIP : 'SnapPea can backup your app data.<br />For example, high scores in a game or chat records.<br />This feature is only supported over USB.',
    BACKUP_APP_DATA_TIP_TITLE : 'Backup app data',
    BACKUP_APP_DATA_TIP_CONTENT : 'When you start your backup, your device will ask for permission. Select "Backup my app data" to get started.<br /><em>To let SnapPea restore your data, don\'t set a password.</em>',
    BACKUP_APP_DATA_WAITING : 'Waiting for your to confirm backup on your device',
    RESTORE_APP_DATA_WAITING : 'Waiting for your to confirm restore on your device',

    BACKUP_APP_DATA_ERROR : 'Failed to backup app data',
    BACKUP_APP_DATA_ERROR_DEVICE_INCOMPATIBLE : 'Device hasn\'t been rooted, or your device is too old.',
    BACKUP_APP_DATA_ERROR_DEVICE_WIFI : 'SnapPea doesn\'t support Wi-Fi backups of app data, please connect via USB.',
    BACKUP_APP_DATA_ERROR_ENCRYPT :　'SnapPea doesn\'t support encrypted backups. Please unencrypt and try again.',
    BACKUP_APP_DATA_ERROR_CONNECT_ERROR :　'Failed to transfer file.',
    USER_CANCELED :　'Canceled app data backup',
    CUSTOM_AUTH_FAILED_ERROR :　'Login data expired. Please logout and login again.',
    CUSTOM_SERVER_UNAVALABEL_ERROR :　'Sorry, our servers are busy. Please wait a little while and try again.',
    RESTORE_APP_DATA_ERROR : 'Failed to restore app data',

    AUTO_BACKUP_COMPLETE_FINISH : 'Auto-backup completed!',
    AUTO_BACKUP_COMPLETE_FINISH_TIP : 'Backups are not encrypted, please make sure to store them securely.',
    AUTO_BACKUP_COMPLETE_FINISH_CONTENT : 'Data backed up: <em>{1}</em>',

    PHOTO_DOWNLOAD_NOTIFY_TITLE : '{1} photo(s) synced from the cloud to your computer',
    PHOTO_DOWNLOAD_NOTIFY_CONTENT : 'We just synced photos on the cloud to your computer. You can view them in SnapPea.',

    BACKUP_GUIDE_TIP : 'You haven\'t backed up data!',
    BACKUP_GUIDE_TIP_DAY : '{1} days since your last backup!',
    BACKUP_GUIDE_CONTENT : 'SnapPea reminds you to backup up your phone to prevent data loss. You can backup contacts, messages, photos, and apps.',
    BACKUP_GUIDE_NOW : 'Backup now',

    RESTORE_BATTERY_TIP : 'Your device\'s batter power is less than 20%. If your device shuts down, your backup may be incomplete. We recommend that charge your device and then restore. Continue anyway?',
    AUTO_BACKUP_TIP_TITLE : 'Still backing up manually? Try our auto-backup!',
    AUTO_BACKUP_TIP_DESC : 'Link your device and we\'ll take care of backups automatically. Link and auto-backup your device?',
    AUTO_BACKUP_YES : "Activate auto-backup",
    AUTO_BACKUP_NO : "Don't activate",
    AUTO_BACKUP_REMOTE_TIP_TITLE : 'Don\'t lose your data. Activate cloud-backup!',
    AUTO_BACKUP_REMOTE_TIP_DESC : 'Connect your device and we\'ll backup your <em>Contacts / Messages / Apps</em> to the cloud. Backup to the cloud?',

    BACKUP : 'Backup',
    BACKUP_DES : 'Backup your phone\'s data to computer',
    BACKUP_TO_LOCAL : 'Backup to computer',
    BACKUP_TO_LOCAL_DESC : 'Faster, to restore you have to connect to your computer',
    BACKUP_TO_CLOUD : 'Backup to cloud',
    BACKUP_TO_CLOUD_DESC : 'After sign in and going online, you can restore directly on your phone.',
    BACKUP_DEVICE_TITLE : 'Backup your {1}\'s data',
    BACKUP_DEVICE_LOCAL_DESC : 'SnapPea is ready to backup the following data to your computer:',
    BACKUP_DEVICE_REMOTE_DESC : 'SnapPea is ready to backup the following data to the cloud:',
    BACKUP_ADVANCE_TITLE : 'Advanced Backup Settings',
    GET_FILE_PATH_FAILED : 'Invalid file path, please browse to select',
    BACKUP_FINISH : '{1} completed',
    BACKUP_FAILED : '{1} failed',
    BACKUPING_TO_LOCAL : 'Backing up to computer, please don\'t disconnect...',
    BACKUPING_TO_REMOTE : 'Backing up to the cloud, please don\'t disconnect...',
    BACKUP_LOCAL_COMPLATE_TITLE : 'Completed backup to computer',
    BACKUP_REMOTE_COMPLATE_TITLE : 'Completed backup to cloud',
    CANCEL_BACKUP : 'Backup in progress. Cancel now?',

    RESTORE : 'Restore',
    RESTORE_DES : 'Restore phone\'s data from a backup',
    RESTORE_FROM_LOCAL : 'Restore data from computer',
    RESTORE_FROM_LOCAL_DESC : 'Restore from backups saved to your computer',
    RESTORE_FROM_CLOUD : 'Restore data from cloud',
    RESTORE_FROM_CLOUD_DESC : 'Restore from backups saved to the cloud. Requires sign in and internet connection.',
    RESTORE_DEVICE_TITLE : 'Restore data to your {1}',
    RESTORE_DEVICE_LOCAL_DESC : 'SnapPea is ready to restore the following data to your phone:',
    RESTORE_CHOOSE_DESC : 'Please select a backup file',
    OPEN_RESTORE_FILE : 'Manually select backup file',
    RESTORE_ADVANCE_TITLE : 'Advanced Restore Settings',
    RESTORE_CONTACT_COMPLATE : 'Contacts restored successfully',
    RESTORE_SMS_COMPLATE : 'Messages restored successfully',
    RESTORE_NONAPP_COMPLATE : 'Contacts and messages restored successfully',
    RESTORE_APP_COMPLATE : 'Apps are installing, please don\'t disconnect',
    RESTORING_FROM_LOCAL : 'Restoring from computer, please don\'t disconnect',
    RESTORING_FROM_REMOTE : 'Restoring from cloud, please don\'t disconnect',
    INCLUDE_APP_DATA : 'Includes app data',
    CANCEL_RESTORE : 'Restore in progress. Cancel now?',
    NO_REMOTE_BACKUP_FILE : 'You haven\'t backed up your data to the cloud',

    ENABLE : 'On',
    DISABLE : 'Off',
    DO_ENABLE : 'Turn On',
    DO_SETTING : 'Settings',
    APP_AND_DATA: 'Apps + data',
    ADVANCED : 'Advanced settings',
    CANCEL : 'Cancel',
    DATA_TYPE: 'Data type',
    BACKUP_TYPE: 'App backup type',
    BACKUP_FILE_PATH: 'Backup file path',
    BACKUP_FILE_NAME: 'Backup file name',
    APP_TYPE_WDAPK_TITLE: 'Backup app list (recommended)',
    APP_TYPE_WDAPK_TITLE_DESC: 'Backup app list only, no need to backup files. To restore, SnapPea will download the apps and install. This is fast.',
    APP_TYPE_APK_TITLE: 'Backup full app file',
    APP_TYPE_APK_TITLE_DESC: 'Backup full app files. This takes time.',
    BACKUP_CHANGE_FILE_PATH: 'Edit',
    LAST_BACKUP_TIME : 'Last backup:',
    AUTO_BACKUP_TO_LOCAL : 'Auto-backup:',
    AUTO_BACKUP_TO_REMOTE : 'Auto-backup to cloud:',
    DONE : 'Completed',
    SWITCH_TASK_MODULE : 'View task manager',
    SHOW_MORE : 'Show more',
    WRITE_LOCAL_FILE_ERROR : 'Failed to write file',
    COMPRASS_FILE_ERROR : 'Failed to compress',
    PROGRESS_DONE : 'Completed',
    NAV_AUTO_BACKUPING : 'Auto-backing up...',
    NAV_BACKUPING : 'Backing up...',
    NAV_RESTORING : 'Restoring...',
    CUSTOM_UNZIP_BACKUP_FILE_ERROR : 'Sorry, failed to decompress and restore some apps.',
    //QQ : '<a class="qq-link" href="http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODAwMTAzMl85Mzc5OF80MDA2NTI4NzA2XzJf" target="_default">联系豌豆帮忙解决一下<span class="icon"/></a>',

    //CUSTOM_RESOURCE_LOCKED : '豌豆荚在 8 月 25 日碰到技术故障,当天我们暂时关闭了豌豆荚的账号服务,12 个小时后账号服务修复完成.但为了您的信息安全考虑,目前通过旧的密码将不能使用云恢复、云相册等功能.请您立即修改密码,以便正常使用豌豆荚.',
    //SYNC_PHOTO_PUSH_NOTIFY_TITLE : '您需要自动下载云相册图片到电脑吗?',
    //SYNC_PHOTO_PUSH_NOTIFY_CONTENT : '您手机上的照片已同步到云端.在电脑上开启云相册同步后,豌豆荚将自动将您云相册的图片下载到电脑,查看图片更方便.'

    RESTORE_ANDROID_4_4 : 'You\'re using Android 4.4. To restore text messages, set SnapPea as the "Default SMS App" in your phone\'s settings. Afterwards, return to the original settings.',
    RECOVER_DEAFULT_4_4 : 'To ensure that you can send text messages, please switch back to your original "Default SMS App."',
    UPDATA_USB_PROXY_4_4 : 'You\'re using Android 4.4. To import text messages, you need to update to the latest version of SnapPea.'
});