/*global define*/
define({
    LOADING_UPDATE : '正在加载升级信息...',
    LATEST_LABEL : '最新：',
    DISLIKE : '猜错了',
    UPDATE_ALL : '一键升级',
    UPDATE_RECOMMENDED : '全部升级',
    UPDATE : '升级',
    UPDATING : '升级中',
    COULD_UPDATE_TO : '升至：',
    COULD_UPDATE : '可升级至',
    MANAGE_MY_APPS : '管理我的应用',
    CONFIG : '设置',
    UPDATE_NOTIFI_FREQUENCE_WEEKLY : '每周提醒一次',
    UPDATE_NOTIFI_FREQUENCE_DAYLY : '每天提醒一次',
    UPDATE_NOTIFI_FREQUENCE_NEVER : '不再提醒',
    CONFIRM_UNINSTALL_ON_DEVICE : '请在手机上确认卸载。',
    MOVE : '移动',
    CATEGORY : '类别：',
    VERSION_HISTORY : '历史版本',
    IGNORED_APPS : '已有 {1} 个应用忽略升级',
    IGNORED_TITLE : '忽略升级的应用',
    ENABLE_APP_UPGRADE_TIP : '您已经禁用了「自动检测可升级应用」功能，<span class="link button-open-update">点击重新开启</span>',
    CHANGE_LOG_EMPRY : '暂时没有此应用的升级信息',
    SUGGESTION_REF : '根据 <span class="button-navigate-to-ref-page">{1}</span> 推荐',

    START_SCAN : '开洗',
    SCAN_TIP1 : '山寨应用有风险，广告应用很烦人！',
    SCAN_TIP2 : '豌豆洗白白会帮您找出这些应用，并协助您把它们更换成官方版或没有广告的版本。',
    SCAN_TIP3 : '尽情享受放心应用的乐趣吧！',
    SCANNING : '正在准备洗澡水...',
    SCANNING_TIP : '分析已安装应用',
    QUERYING : '正在准备沐浴液...',
    QUERYING_TIP : '查找可替换应用',
    PIRATE_TIP : '山寨应用可替换为官方版',
    ADS_NO_SOLUTION_TIP : '广告应用暂无替换方案',
    ADS_TIP : '广告应用可替换为无广告版',
    PIRATE : '山寨',
    ADS : '广告',
    REPLACE : '替换为正版',
    RESULT_EMPTY : '本来就好白！',
    RESULT_EMPTY_TIP : '太棒了！没有发现山寨应用和广告应用！',
    RESULT_FINISH : '洗后变好白',
    RESULT_FINISH_TIP : '没有山寨和广告应用的困扰，世界清静多了。',
    RESULT_SUMMARY_POP_ADS : '洗好了！',
    RESULT_SUMMARY_POP_ADS_TIP : '还有 {1} 个有通知栏广告的应用暂时没有替换方案，您可以看看是否需要卸载。',
    UNINSTALL_ALL : '全部卸载',
    DIRECT_ADS_TITLE : '本来就挺白！',
    DIRECT_ADS_DESC : '没有发现山寨应用！</br>有 {1} 个有通知栏广告的应用暂时没有替换方案，您可以看看是否需要卸载。',
    WASH_CONNECT_TIP : '需要 USB 连接模式才可以洗白白哦！',
    WASH_SHARE : '去臭美一下',
    APP_WASH_ERROR : '糟糕！停水了！',
    WASH_ERROR_TIP : '洗白白的时候停水了，请检查您的网络连接后重试一下。',
    WASH_RETRY : '再放一缸水',
    WASH_SURVEY : '有豌豆没发现的脏应用？',
    TELL_US : '告诉豌豆们吧！',

    EMPTY_TIP_WEB_APP_NOT_LOGIN : '<span>下载过的应用不见了</span><br /><span>登录豌豆荚账号即可全部找回。</span><br /><button class="button-login primary grand">登录豌豆荚</button>',

    ALERT_TIP_CRITICAL_APP : '非常抱歉，「{1}」无法删除。此应用是 Android 手机系统的核心应用，删除后会导致手机损坏或「变砖」。',
    ALERT_TIP_UNINSTALL_WIFI_CONFIRM : '您当前使用的是 Wi-Fi 连接，需要您到手机上完成卸载。',
    ALERT_TIP_DEL_SYS_APP_CONFIRM : '<p>确定要卸载选中的 {1} 个系统应用吗？</p><p>卸载系统应用可能会导致您的手机无法正常工作。</p>',
    ALERT_TIP_IGNORED_UPDATE_CONFIRM : '确定要忽略此应用的升级吗？忽略成功后，您可以在「忽略升级的应用」中更改此设置。',
    ALERT_TIP_MOVE_NEED_CONFIRM : '请到手机上确认移动应用。',
    ALERT_TIP_UPDATE_ILLEGAL : '<p>检测到「{1}」新版本和已安装版本签名不一致。</p><p>如果您选择继续升级，豌豆荚会帮您先删除旧版本再安装，这样原来的应用数据和游戏存档将会丢失。</p><p>是否继续？</p>',
    ALERT_TIP_UPDATE_NOT_RECOMMENDED : '<p>{1}</p><p>是否继续？</p>',
    ALERT_TIP_UPDATE_ILLEGAL_SYSTEM_UNROOT : '<p>检测到「{1}」新版本和已安装版本签名不一致。</p><p>由于此应用是一个系统应用，豌豆荚需要 root 权限才能为您升级此应用。</p><p>是否继续？</p>',
    SD_MOUNT_TIP : '由于您在手机上打开了「USB 存储设备」，豌豆荚无法显示您安装的应用程序。请根据提示管理「USB 存储」选项功能再试。',
    SD_MOUNT_TIP2 : '您在手机上打开了「USB 存储设备」，如果您有安装在 SD 卡上的应用，将不能被读取。<a href="http://www.wandoujia.com/help/?do=topic&id=23907837&utm_medium=client" target="_default">查看帮助</a>',
    FLASH_TIP_TIP : '又刷机了？豌豆荚可以快速帮您恢复数据到手机上哦。<span class="button-flash link">马上去试试！</span>',

    ONE_KEY_UPDATE : '一键升级 ({1})',
    ONE_KEY_UPDATE_DES : '您有 {1} 个应用可升级。',
    UPDATE_DES : '{1} 个应用可升级',
    ONE_KEY_TRANSFER : '一键移动 ({1})',
    ONE_KEY_TRANSFER_DES : '帮您把手机内存的应用移动到 SD 卡上，彻底释放手机内存空间。',

    WEB_APPS : '下载过的应用 ({1})',
    WEB_APPS_EMPTY : '下载过的',
    WEB_APPS_EMPTY_TIP_PRE : '您还没有下载过任何应用哦，现在马上去 ',
    WEB_APPS_EMPTY_TIP_LINK : '寻找有趣的应用',
    WEB_APPS_EMPTY_TIP_POST : ' 来下载吧！',
    APP_SEARCH : '应用搜索',
    UNINSTALL_AFTER_HIDE : '已从下载历史中删除「{1}」，要在手机上卸载这个应用吗？',
    WEB_APPS_HIDE_TEXT : '隐藏',
    WEB_APPS_HIDE_FAILED_TEXT : '隐藏失败',

    APP_WASH : '豌豆洗白白',
    APP_WASH_DES : '洗白白一下，跟山寨应用，有广告的应用说白白！',

    LIKE : '喜欢',
    UNLIKE : '不喜欢',
    COMMENTARY_PLACEHOLDER : '点评一下「{1}」...',
    COMMENTARY : '评论',
    MODIFY : '发表',
    SEND_SUCCESS : '成功',
    SEND_FAILED : '失败',
    DOWNLOAD_COUNT : '下载次数：',
    DOWNLOAD_COUNT_TIP : '{1}次',
    NO_SPECIAL_PERMISSION : '无特殊权限',
    BATCH_APP_TITLE : '选择了 {1} 个应用',

    ADDING_LOCAL_APK : '正在添加本地应用，请稍候...',
    UPDATEING_ALL : '正在升级...',
    APP_NOT_INDEXED : '很遗憾，豌豆荚还没有收录这个应用呢',
    LOOK_FOR_DETAIL : '查看应用详情',

    COL_NAME_LABEL : '应用名称',
    COL_RATE_LABEL : '好评率',
    COL_VERSION_LABEL : '版本',
    COL_INSTALL_TIME : '安装时间',
    COL_INSTALL_POSITION : '安装位置',
    INSTALL_POSITION_LABEL : '安装位置：',

    BUTTON_ADD_APP_LABEL : '安装新应用',


    BUTTON_MOVE_TO_DEVICE_LABEL : '移动到手机内存',

    APK_SELECTOR_DISCRIPTION_TEXT : '选择 APK 文件或包含 APK 的文件夹，支持多选',

    UNINSTALL_TIP : '确定要卸载选中的 {1} 个应用？',
    MOVE_TO_SD_CARD : '您选择了 {1} 个可移动到 SD 卡的应用，确定转移吗？',
    MOVE_TO_DEVICE : '您选择了 {1} 个可移动到手机内存的应用，确定转移吗？',
    UPGRADE_TIP_TEXT : '确定要升级选中的 {1} 个应用？',

    NON_USER_APPS_TEXT : '<div><span>嗯？看起来您的手机什么都没有装哦，</span></br><span>要不要去下几个好玩的应用？</span></br><button class="primary button-download-game grand">马上下载应用</button></div>',
    NON_SYSTEM_APPS_TEXT : '您的手机没有系统应用',
    NON_UPGRADE_APPS_TEXT : '太赞了，所有的应用都是最新的了',
    UPGRADE_TIP : '亲，目前不能为您的手机升级应用，我们正在努力中...',

    IGNORED : '已忽略',

    DELETE_APK_WHEN_FINISH : '完成后删除本地 APK 文件',

    ONE_KEY_TRANSFER_TITLE : '一键移动',
    INSTALL : '安装',
    INSTALLING : '安装中',
    UNINSTALL : '卸载',
    VERSION : '当前版本：',
    LATEST_VERSION : '最新版本：',
    LATEST_VERSION_SIZE : '新版大小：',
    SIZE : '大小：',
    PERMISSON : '权限：',
    MORE : '更多',
    RECOMMENDATION_DEFAULT : '豌豆猜您也喜欢',
    RECOMMENDATION : '安装了这个应用的人也喜欢',
    APP_INSTALL_VERSION_LABEL : '已安装的版本',
    APP_LATEST_VERSION_LABEL : '最新的版本',
    APP_SELECT_GRID_TIP : '您还未添加应用',
    APP_SELECT_GRID_TIP_BACKUP : '，您可以 <span class="button-import-backup link">从自动备份中导入</span>',
    BUTTON_TRANSFER_LABEL : '移动到 SD 卡',
    CONFIRM_UNINSTALL : '您确定卸载该应用吗？',
    CONFIRM_UNINSTALL_SYSTEM_APP : '确定要卸载该应用吗？<br />您选择的应用是系统应用。卸载错误的系统应用可能导致您的系统损坏，手机无法使用。',

    APP_DELETE_PROGRESS : '正在卸载，请稍候...',
    APP_DELETE_SUCCESS : '成功卸载 {1} 个应用。',

    APP_EXPORT_PROGRESS : '正在导出，请稍候...',
    APP_EXPORT_SUCCESS : '成功导出 {1} 个应用。',

    APPS_INSTALL_FAILED : '非常抱歉，以下应用文件损坏无法安装：',

    APPS_TRANSFER_TIP_TEXT : '您选择的应用移动到 SD 卡后可能导致应用无法正常使用，您确定要移动吗？ ',
    APPS_TRANSFER_PROCESSING_TEXT : '正在移动...',
    APPS_TRANSFER_SUCCESS_TEXT : '转移成功',
    APPS_BATCH_UNINSTALL_FAILED : '非常抱歉，以下应用卸载失败：',
    UNINSTALL_FAILED : '非常抱歉，应用卸载失败。',
    UNINSTALL_FAILED_SYSTEM_APP : '请在豌豆荚上允许豌豆荚获取 root 权限后重试。',

    APPS_CANCEL_IGNORE_TEXT : '取消忽略',

    APPS_TRANSFER_FAILED_TEXT : '非常抱歉，以下应用转移失败：',
    APPS_EXPORT_ERROR_TEXT : '非常抱歉，以下应用导出失败：',

    APPS_USB_TEXT : '您的手机连接时打开了「USB 存储设备」，豌豆荚无法移动应用到 SD 卡，请按照图示关闭「USB 存储设备」后重试。',

    XIAOMI_SD_DISABLE : '非常抱歉，无法安装应用到 SD 卡。<br />小米手机默认 ROM 的设置禁止了安装应用到 SD 卡，豌豆荚无法为您安装或移动应用到 SD 卡。',

    MOVE_FAILED : '转移失败了。',

    EXPORT_ERROR : '应用导出失败。',
    UNINSTALL_ERROR : '应用卸载失败。',

    GETTING_RECOMMEND : '正在猜呀猜...',
    RECOMMEND_LIST_EMPTY : '好累啊，明天再玩吧！',
    GET_RECOMMEND_ERROR : '抱歉，猜不着啦',

    RETURN_ALL : '全部应用',
    SEARCH_TIP_PART : '{1} 个与「{2}」有关的应用',

    UPDATE_CATEGORY_RECOMMENDED : '来自豌豆荚的升级',
    UPDATE_CATEGORY_WARNING : '来自其它市场的升级',
    UPDATE_CATEGORY_NOT_RECOMMENDED : '需谨慎的升级',
    NOT_RECOMMENDED_REASON : '谨慎升级的理由：',

    VERIFICATION_CODE : '验证码：',
    CHANGE_VERIFICATION_CODE : '点击更换',

    CHECK : '查看',
    YOUR_FAVORITE_APP_TYPE : '您喜欢的应用类型',
    LAST_APP_LIST : '最新应用专题',
    SUBMIT : '提交',
    NEXT : '下一步',
    CLOSED : '关了',
    NO : '没有',
    TRY_AGAIN : '再洗一次',
    OTHERS : '其他',

    CHOOSE_BAD_APPS : '选择有问题的应用',
    WASH_WRONG : '为什么洗错了',
    WASH_LEAP : '为什么洗漏了',
    WASH_FEEDBACK_TITLE : '发生什么问题了？',
    WASH_RESULT_TITLE : '关闭通知栏广告',
    WASH_ALREADY_CLOSE : '已经关闭了「显示通知」？',
    WASH_WRONG_TRY_AGAIN : '洗错了？<span class="link button-restart">再洗一次</span>试试，或<span class="link button-feedback">反馈给豌豆们</span>',
    WASH_INTRO_FEED_BACK : '之前洗错了？请<span class="link button-feedback">反馈给豌豆们</span>',
    WASH_FEED_BACK_CARD_IGNORE : '能告诉豌豆们为什么暂不处理吗？',
    WASH_RESULT_ITEM_ATTENTION : '注意：替换后，当前山寨应用的数据或游戏积分会随替换而消失。',
    WASH_RESULT_ITEM_CONFIRM : '确定替换吗？',
    WASH_RESULT_ITEM_CHANGE_BY_OTHERS : '该应用被原开发者以外的人篡改过',
    WASH_RESULT_ITEM_APP_HAS_ADS : '该应用有广告',
    WASH_RESULT_ITEM_DISABLE_ADS : '关广告',
    WASH_RESULT_ITEM_IGNORED : '暂不处理',
    WASH_FEED_BACK_WRONG : '洗错了',
    WASH_FEED_BACK_LEAP : '洗漏了',
    WASH_DO_SOMETHING_BAD : '其他坏行为',
    WASH_NOTIFI_PRIMARY_TITLE : '跟山寨应用和广告应用说白白',
    WASH_NOTIFI_SECO_TITLE : '豌豆洗白白可以找出您手机中的山寨应用和广告应用，并协助您把它们替换为官方版或无广告版。',
    WASH_NOTIFI_DO_WASH : '洗一下',
    WASH_RESULT_INFO_BEFORE_REPLACE : '替换前：',
    WASH_RESULT_INFO_AFTER_REPLACE : '替换后：',
    WASH_CLOSE_NOTIFI_TITLE : '请在手机上关闭{{= it.title }}的通知栏消息',

    /* Permission info */
    "android.permission-group.ACCOUNTS" : "访问您的账号",
    "android.permission-group.COST_MONEY" : "需要您付费的服务",
    "android.permission-group.DEVELOPMENT_TOOLS" : "开发工具",
    "android.permission-group.LOCATION" : "您的位置",
    "android.permission-group.HARDWARE_CONTROLS" : "硬件控制",
    "android.permission-group.MESSAGES" : "读写您的短信和邮件",
    "android.permission-group.NETWORK" : "访问网络",
    "android.permission-group.PERSONAL_INFO" : "您的个人信息",
    "android.permission-group.PHONE_CALLS" : "手机通话",
    "android.permission-group.STORAGE" : "读写 SD 卡",
    "android.permission-group.SYSTEM_TOOLS" : "系统工具",
    "android.permission.ACCESS_CHECKIN_PROPERTIES" : "访问检入属性",
    "android.permission.ACCESS_COARSE_LOCATION" : "读取基于网络的粗略位置",
    "android.permission.ACCESS_FINE_LOCATION" : "读取精准的 GPS 位置",
    "android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" : "访问额外的位置信息提供程序命令",
    "android.permission.ACCESS_MOCK_LOCATION" : "使用模拟地点进行测试",
    "android.permission.ACCESS_NETWORK_STATE" : "查看网络状态",
    "android.permission.ACCESS_SURFACE_FLINGER" : "访问 SurfaceFlinger",
    "android.permission.ACCESS_WIFI_STATE" : "查看 Wi-Fi 状态",
    "android.permission.BATTERY_STATS" : "修改电池统计信息",
    "android.permission.BLUETOOTH" : "创建蓝牙连接",
    "android.permission.BLUETOOTH_ADMIN" : "蓝牙管理",
    "android.permission.BRICK" : "变砖",
    "android.permission.BROADCAST_PACKAGE_REMOVED" : "发送包删除的广播",
    "android.permission.BROADCAST_STICKY" : "发送置顶广播",
    "android.permission.CALL_PHONE" : "拨打电话",
    "android.permission.CALL_PRIVILEGED" : "拨打任何电话",
    "android.permission.CAMERA" : "拍照",
    "android.permission.CHANGE_COMPONENT_ENABLED_STATE" : "启用或停用应用程序组件",
    "android.permission.CHANGE_CONFIGURATION" : "更改用户界面设置",
    "android.permission.CHANGE_NETWORK_STATE" : "更改网络连接性",
    "android.permission.CHANGE_WIFI_STATE" : "更改 Wi-Fi 状态",
    "android.permission.CLEAR_APP_CACHE" : "删除所有应用程序缓存数据",
    "android.permission.CLEAR_APP_USER_DATA" : "删除应用程序的数据",
    "android.permission.CONTROL_LOCATION_UPDATES" : "控制位置更新通知",
    "android.permission.DELETE_CACHE_FILES" : "删除其他应用程序的缓存",
    "android.permission.DELETE_PACKAGES" : "删除应用程序",
    "android.permission.DEVICE_POWER" : "开机或关机",
    "android.permission.DIAGNOSTIC" : "读取/写入诊断所拥有的资源",
    "android.permission.DISABLE_KEYGUARD" : "停用键盘锁",
    "android.permission.DUMP" : "检索系统内部状态",
    "android.permission.EXPAND_STATUS_BAR" : "展开/收拢状态栏",
    "android.permission.FACTORY_TEST" : "在出厂测试模式下运行",
    "android.permission.FLASHLIGHT" : "控制闪光灯",
    "android.permission.FORCE_BACK" : "强制应用程序关闭",
    "android.permission.GET_ACCOUNTS" : "发现已知账号",
    "android.permission.GET_PACKAGE_SIZE" : "计算应用程序存储空间",
    "android.permission.GET_TASKS" : "检索当前运行的应用程序",
    "android.permission.HARDWARE_TEST" : "测试硬件",
    "android.permission.INJECT_EVENTS" : "按键和控制按钮",
    "android.permission.INSTALL_PACKAGES" : "直接安装应用程序",
    "android.permission.public_SYSTEM_WINDOW" : "显示未授权的窗口",
    "android.permission.INTERNET" : "网络通信",
    "android.permission.MANAGE_APP_TOKENS" : "管理应用程序令牌",
    "android.permission.MASTER_CLEAR" : "将系统恢复为出厂设置",
    "android.permission.MODIFY_AUDIO_SETTINGS" : "更改您的音频设置",
    "android.permission.MODIFY_PHONE_STATE" : "修改手机状态",
    "android.permission.READ_PHONE_STATE" : "读取手机状态和身份",
    "android.permission.MOUNT_UNMOUNT_FILESYSTEMS" : "装载和卸载文件系统",
    "android.permission.PERSISTENT_ACTIVITY" : "让应用程序始终运行",
    "android.permission.PROCESS_OUTGOING_CALLS" : "拦截外拨电话",
    "android.permission.READ_CALENDAR" : "访问日历",
    "android.permission.READ_CONTACTS" : "访问联系人数据",
    "android.permission.READ_FRAME_BUFFER" : "读取帧缓冲区",
    "android.permission.READ_INPUT_STATE" : "记录您键入的内容和执行的操作",
    "android.permission.READ_LOGS" : "读取系统日志文件",
    "android.permission.READ_OWNER_DATA" : "读取所有者数据",
    "android.permission.READ_SMS" : "读取短信或彩信",
    "android.permission.READ_SYNC_SETTINGS" : "读取同步设置",
    "android.permission.READ_SYNC_STATS" : "读取同步统计信息",
    "android.permission.REBOOT" : "强行重新启动手机",
    "android.permission.RECEIVE_BOOT_COMPLETED" : "开机时自动启动",
    "android.permission.RECEIVE_MMS" : "接收彩信",
    "android.permission.RECEIVE_SMS" : "接收短信",
    "android.permission.RECEIVE_WAP_PUSH" : "接收 WAP",
    "android.permission.RECORD_AUDIO" : "录音",
    "android.permission.REORDER_TASKS" : "对正在运行的应用程序重新排序",
    "android.permission.RESTART_PACKAGES" : "重新启动应用程序",
    "android.permission.SEND_SMS" : "发送短信",
    "android.permission.SET_ACTIVITY_WATCHER" : "监控所有应用程序的启动",
    "android.permission.SET_ALWAYS_FINISH" : "关闭所有后台应用程序",
    "android.permission.SET_ANIMATION_SCALE" : "修改全局动画速度",
    "android.permission.SET_DEBUG_APP" : "启用应用程序调试",
    "android.permission.SET_ORIENTATION" : "更改屏幕显示方向",
    "android.permission.SET_PREFERRED_APPLICATIONS" : "设置首选应用程序",
    "android.permission.SET_PROCESS_FOREGROUND" : "允许应用程序强行运行到前端",
    "android.permission.SET_PROCESS_LIMIT" : "限制运行的进程个数",
    "android.permission.SET_TIME_ZONE" : "设置时区",
    "android.permission.SET_WALLPAPER" : "设置壁纸",
    "android.permission.SET_WALLPAPER_HINTS" : "设置有关壁纸大小的提示",
    "android.permission.SIGNAL_PERSISTENT_PROCESSES" : "向应用程序发送 Linux 信号",
    "android.permission.STATUS_BAR" : "停用或修改状态栏",
    "android.permission.SUBSCRIBED_FEEDS_READ" : "读取订阅的供稿",
    "android.permission.SYSTEM_ALERT_WINDOW" : "显示系统级警报",
    "android.permission.VIBRATE" : "控制振动器",
    "android.permission.WAKE_LOCK" : "防止手机休眠",
    "android.permission.WRITE_APN_SETTINGS" : "写入「接入点名称」设置",
    "android.permission.WRITE_CALENDAR" : "添加或修改日历活动以及向邀请对象发送电子邮件",
    "android.permission.WRITE_CONTACTS" : "编辑或写入联系人",
    "android.permission.WRITE_GSERVICES" : "修改 Google 服务地图",
    "android.permission.WRITE_OWNER_DATA" : "写入所有者数据",
    "android.permission.WRITE_SETTINGS" : "修改全局系统设置",
    "android.permission.WRITE_SMS" : "编辑短信或彩信",
    "android.permission.WRITE_SYNC_SETTINGS" : "写入同步设置"
});