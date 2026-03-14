/**
 * Dramatized app description mapping.
 * Shows app name + playful activity description for privacy-friendly display.
 * Maps app_name (from backend app-names.json) to fun descriptions.
 */

const descriptions: Record<string, string> = {
  // Messaging
  Telegram: "正在TG上冲浪喵~",
  QQ: "正在QQ上水群喵~",
  TIM: "正在TIM上水群喵~",
  微信: "正在微信上聊天喵~",
  WeChat: "正在微信上聊天喵~",
  Discord: "正在Discord灌水喵~",
  Line: "正在Line上聊天喵~",
  企业微信: "正在企业微信办公喵~",
  钉钉: "正在钉钉办公喵~",

  // Browsers
  "Microsoft Edge": "正在用Edge网上冲浪喵~",
  "Google Chrome": "正在用Chrome网上冲浪喵~",
  Chrome: "正在用Chrome网上冲浪喵~",
  Firefox: "正在用Firefox网上冲浪喵~",
  Safari: "正在用Safari网上冲浪喵~",
  Opera: "正在用Opera网上冲浪喵~",
  Arc: "正在用Arc网上冲浪喵~",

  // Code editors
  "VS Code": "正在用VS Code疯狂写bug喵~",
  "Visual Studio Code": "正在用VS Code疯狂写bug喵~",
  "Visual Studio": "正在用VS写代码喵~",
  "IntelliJ IDEA": "正在用IDEA写代码喵~",
  PyCharm: "正在用PyCharm写代码喵~",
  WebStorm: "正在用WebStorm写代码喵~",
  GoLand: "正在用GoLand写代码喵~",
  "JetBrains Rider": "正在用Rider写代码喵~",
  DataGrip: "正在用DataGrip查数据库喵~",
  "Android Studio": "正在用Android Studio写代码喵~",
  Cursor: "正在用Cursor疯狂写bug喵~",
  "Sublime Text": "正在用Sublime写代码喵~",
  "Google Antigravity": "正在用Antigravity让AI帮忙写代码喵~",
  Windsurf: "正在用Windsurf写代码喵~",
  Zed: "正在用Zed写代码喵~",
  CLion: "正在用CLion写C++喵~",
  RustRover: "正在用RustRover写Rust喵~",
  "JetBrains Fleet": "正在用Fleet写代码喵~",
  HBuilderX: "正在用HBuilderX写前端喵~",

  // Dev tools
  "Docker Desktop": "正在用Docker搞容器喵~",
  "GitHub Desktop": "正在用GitHub Desktop管理代码喵~",
  Postman: "正在用Postman调接口喵~",
  DBeaver: "正在用DBeaver查数据库喵~",
  Navicat: "正在用Navicat查数据库喵~",

  // File managers
  文件资源管理器: "正在翻文件夹找东西喵~",
  "File Explorer": "正在翻文件夹找东西喵~",
  文件管理: "正在翻文件夹找东西喵~",
  Finder: "正在翻文件夹找东西喵~",
  "Total Commander": "正在翻文件夹找东西喵~",

  // Terminals
  "Windows Terminal": "正在用命令行敲命令喵~",
  终端: "正在用命令行敲命令喵~",
  Terminal: "正在用命令行敲命令喵~",
  PowerShell: "正在用命令行敲命令喵~",
  命令提示符: "正在用命令行敲命令喵~",
  "Command Prompt": "正在用命令行敲命令喵~",
  iTerm2: "正在用命令行敲命令喵~",
  Termux: "正在Termux里搞事情喵~",

  // Video
  哔哩哔哩: "正在B站划水摸鱼喵~",
  bilibili: "正在B站划水摸鱼喵~",
  YouTube: "正在YouTube看视频喵~",
  Netflix: "正在Netflix追剧喵~",
  爱奇艺: "正在爱奇艺追剧喵~",
  优酷: "正在优酷追剧喵~",
  腾讯视频: "正在腾讯视频追剧喵~",
  VLC: "正在用VLC看视频喵~",
  PotPlayer: "正在用PotPlayer看视频喵~",
  mpv: "正在用mpv看视频喵~",

  // Music
  Spotify: "正在Spotify听歌喵~",
  网易云音乐: "正在网易云听歌喵~",
  "QQ音乐": "正在QQ音乐听歌喵~",
  酷狗音乐: "正在酷狗听歌喵~",
  "Apple Music": "正在Apple Music听歌喵~",
  foobar2000: "正在用foobar2000听歌喵~",

  // Gaming
  Steam: "正在Steam玩游戏喵~",
  "Epic Games": "正在Epic玩游戏喵~",
  "Genshin Impact": "正在提瓦特冒险喵~",
  原神: "正在提瓦特冒险喵~",
  "League of Legends": "正在峡谷激战喵~",
  "Honkai: Star Rail": "正在星穹铁道开拓喵~",
  "崩坏：星穹铁道": "正在星穹铁道开拓喵~",
  Minecraft: "正在Minecraft挖矿喵~",

  // Galgame / Visual Novels
  "いろとりどりのセカイ": "正在攻略gal喵~",
  "五彩斑斓的世界": "正在攻略gal喵~",
  FAVORITE: "正在攻略gal喵~",
  "ものべの": "正在攻略gal喵~",
  CLANNAD: "正在攻略gal喵~",
  "Fate/stay night": "正在攻略gal喵~",
  "Summer Pockets": "正在攻略gal喵~",
  "サマーポケッツ": "正在攻略gal喵~",
  "Doki Doki Literature Club": "正在攻略gal喵~",
  "WHITE ALBUM 2": "正在攻略gal喵~",
  "千恋＊万花": "正在攻略gal喵~",
  "Making*Lovers": "正在攻略gal喵~",
  "Sabbat of the Witch": "正在攻略gal喵~",
  "サノバウィッチ": "正在攻略gal喵~",
  "Riddle Joker": "正在攻略gal喵~",
  "喫茶ステラと死神の蝶": "正在攻略gal喵~",
  Kirikiri: "正在攻略gal喵~",
  KiriKiri: "正在攻略gal喵~",
  BGI: "正在攻略gal喵~",
  SiglusEngine: "正在攻略gal喵~",
  Ethornell: "正在攻略gal喵~",
  CatSystem2: "正在攻略gal喵~",

  // Productivity
  Word: "正在用Word写文档喵~",
  "Microsoft Word": "正在用Word写文档喵~",
  Excel: "正在用Excel算数据喵~",
  "Microsoft Excel": "正在用Excel算数据喵~",
  PowerPoint: "正在做PPT喵~",
  "Microsoft PowerPoint": "正在做PPT喵~",
  OneNote: "正在用OneNote记笔记喵~",
  Notion: "正在用Notion记笔记喵~",
  Obsidian: "正在用Obsidian记笔记喵~",
  Typora: "正在用Typora记笔记喵~",
  记事本: "正在用记事本写东西喵~",

  // Social / Reading
  Twitter: "正在刷推特喵~",
  X: "正在刷推特喵~",
  微博: "正在微博吃瓜喵~",
  小红书: "正在逛小红书喵~",
  抖音: "正在刷短视频喵~",
  TikTok: "正在刷短视频喵~",
  知乎: "正在知乎涨知识喵~",
  今日头条: "正在刷今日头条喵~",
  Reddit: "正在Reddit冲浪喵~",
  GitHub: "正在GitHub摸鱼喵~",
  酷安: "正在酷安逛帖子喵~",
  百度: "正在百度搜东西喵~",

  // Proxy tools
  "Mihomo Party": "正在调代理设置喵~",
  Clash: "正在调代理设置喵~",

  // System
  任务管理器: "正在看任务管理器喵~",
  "Task Manager": "正在看任务管理器喵~",
  系统设置: "正在调系统设置喵~",
  设置: "正在调设置喵~",
  Settings: "正在调设置喵~",
  小米设置: "正在调手机设置喵~",
  搜索: "正在搜索东西喵~",
  输入法: "正在打字喵~",
  画图: "正在画画喵~",
  "UWP 应用": "正在用UWP应用喵~",
  "系统 Shell": "在系统界面喵~",
  系统界面: "在系统界面喵~",

  // Android specific
  桌面: "在主屏幕发呆中喵~",
  相机: "正在拍照喵~",
  相册: "正在翻相册喵~",
  计算器: "正在算数喵~",
  日历: "正在看日历喵~",
  时钟: "正在看时间喵~",
  手机管家: "正在清理手机喵~",

  // Shopping / Services
  支付宝: "正在用支付宝喵~",
  淘宝: "正在逛淘宝剁手喵~",
  京东: "正在逛京东剁手喵~",
  拼多多: "正在拼多多砍一刀喵~",
  唯品会: "正在唯品会逛特卖喵~",
  美团: "正在美团点外卖喵~",
  饿了么: "正在饿了么点外卖喵~",
  大众点评: "正在大众点评找好吃的喵~",
  小米应用商店: "正在逛应用商店喵~",

  // Travel
  铁路12306: "正在12306买火车票喵~",
  携程: "正在携程订行程喵~",
  百度地图: "正在看地图喵~",
  高德地图: "正在看地图喵~",
};

const DEFAULT_DESCRIPTION = "正在忙别的喵~";

// Pre-build lowercase index for O(1) lookups
const lowerIndex = new Map<string, string>();
for (const [key, value] of Object.entries(descriptions)) {
  lowerIndex.set(key.toLowerCase(), value);
}

// ── Display title templates by app category ──
// When displayTitle is available, use a richer template with the title embedded.

type TitleTemplate = (displayTitle: string) => string;

const titleTemplates = new Map<string, TitleTemplate>();

function registerTemplate(names: string[], template: TitleTemplate) {
  for (const n of names) {
    titleTemplates.set(n.toLowerCase(), template);
  }
}

// Video apps
registerTemplate(
  ["YouTube"],
  (t) => `正在YouTube看「${t}」喵~`
);
registerTemplate(
  ["哔哩哔哩", "bilibili"],
  (t) => `正在B站看「${t}」喵~`
);
registerTemplate(
  ["Netflix"],
  (t) => `正在Netflix看「${t}」喵~`
);
registerTemplate(
  ["爱奇艺"],
  (t) => `正在爱奇艺看「${t}」喵~`
);
registerTemplate(
  ["优酷"],
  (t) => `正在优酷看「${t}」喵~`
);
registerTemplate(
  ["腾讯视频"],
  (t) => `正在腾讯视频看「${t}」喵~`
);
registerTemplate(
  ["VLC", "PotPlayer", "mpv"],
  (t) => `正在看「${t}」喵~`
);

// Music apps
registerTemplate(
  ["Spotify"],
  (t) => `正在Spotify听「${t}」喵~`
);
registerTemplate(
  ["网易云音乐"],
  (t) => `正在网易云听「${t}」喵~`
);
registerTemplate(
  ["QQ音乐"],
  (t) => `正在QQ音乐听「${t}」喵~`
);
registerTemplate(
  ["酷狗音乐"],
  (t) => `正在酷狗听「${t}」喵~`
);
registerTemplate(
  ["Apple Music"],
  (t) => `正在Apple Music听「${t}」喵~`
);
registerTemplate(
  ["foobar2000"],
  (t) => `正在听「${t}」喵~`
);

// IDE / editors
registerTemplate(
  ["VS Code", "Visual Studio Code"],
  (t) => `正在用VS Code写「${t}」喵~`
);
registerTemplate(
  ["Cursor"],
  (t) => `正在用Cursor写「${t}」喵~`
);
registerTemplate(
  ["IntelliJ IDEA"],
  (t) => `正在用IDEA写「${t}」喵~`
);
registerTemplate(
  ["PyCharm", "WebStorm", "GoLand", "JetBrains Rider", "DataGrip", "Android Studio"],
  (t) => `正在写「${t}」喵~`
);
registerTemplate(
  ["Sublime Text"],
  (t) => `正在用Sublime写「${t}」喵~`
);
registerTemplate(
  ["Visual Studio"],
  (t) => `正在用VS写「${t}」喵~`
);
registerTemplate(
  ["Google Antigravity"],
  (t) => `正在用Antigravity写「${t}」喵~`
);
registerTemplate(
  ["Windsurf"],
  (t) => `正在用Windsurf写「${t}」喵~`
);
registerTemplate(
  ["Zed"],
  (t) => `正在用Zed写「${t}」喵~`
);
registerTemplate(
  ["CLion", "RustRover", "JetBrains Fleet", "HBuilderX"],
  (t) => `正在写「${t}」喵~`
);

// Dev tools
registerTemplate(
  ["Docker Desktop"],
  (t) => `正在用Docker搞「${t}」喵~`
);
registerTemplate(
  ["GitHub Desktop"],
  (t) => `正在GitHub上搞「${t}」喵~`
);
registerTemplate(
  ["Postman"],
  (t) => `正在用Postman调「${t}」喵~`
);
registerTemplate(
  ["DBeaver", "Navicat"],
  (t) => `正在查「${t}」数据库喵~`
);

// Gaming / Galgame — displayTitle IS the game title
registerTemplate(
  ["Steam"],
  (t) => `正在Steam玩「${t}」喵~`
);
registerTemplate(
  ["Epic Games"],
  (t) => `正在Epic玩「${t}」喵~`
);
// Galgame engines — show gal title
registerTemplate(
  [
    "Kirikiri", "KiriKiri", "BGI", "SiglusEngine", "Ethornell", "CatSystem2",
    "いろとりどりのセカイ", "五彩斑斓的世界", "FAVORITE", "ものべの",
    "CLANNAD", "Fate/stay night", "Summer Pockets", "サマーポケッツ",
    "Doki Doki Literature Club", "WHITE ALBUM 2", "千恋＊万花",
    "Making*Lovers", "Sabbat of the Witch", "サノバウィッチ",
    "Riddle Joker", "喫茶ステラと死神の蝶",
  ],
  (t) => `正在攻略「${t}」喵~`
);

// Productivity
registerTemplate(
  ["Word", "Microsoft Word"],
  (t) => `正在用Word写「${t}」喵~`
);
registerTemplate(
  ["Excel", "Microsoft Excel"],
  (t) => `正在用Excel看「${t}」喵~`
);
registerTemplate(
  ["PowerPoint", "Microsoft PowerPoint"],
  (t) => `正在做「${t}」PPT喵~`
);
registerTemplate(
  ["OneNote"],
  (t) => `正在OneNote写「${t}」喵~`
);
registerTemplate(
  ["Notion"],
  (t) => `正在Notion看「${t}」喵~`
);
registerTemplate(
  ["Obsidian"],
  (t) => `正在Obsidian写「${t}」喵~`
);
registerTemplate(
  ["Typora"],
  (t) => `正在Typora写「${t}」喵~`
);

// Browser — when display_title is available (video site page, generic page title)
registerTemplate(
  ["Google Chrome", "Chrome"],
  (t) => `正在用Chrome看「${t}」喵~`
);
registerTemplate(
  ["Microsoft Edge"],
  (t) => `正在用Edge看「${t}」喵~`
);
registerTemplate(
  ["Firefox"],
  (t) => `正在用Firefox看「${t}」喵~`
);
registerTemplate(
  ["Safari", "Opera", "Arc"],
  (t) => `正在看「${t}」喵~`
);

export function getAppDescription(appName: string, displayTitle?: string): string {
  if (!appName) return DEFAULT_DESCRIPTION;

  // If we have a display_title, try to use a rich template
  if (displayTitle) {
    const template = titleTemplates.get(appName.toLowerCase());
    if (template) {
      return template(displayTitle);
    }
  }

  // Known app without template → use generic description
  const desc = lowerIndex.get(appName.toLowerCase());
  if (desc) return desc;

  // Unknown app with a display title → show it (games, galgame, etc.)
  if (displayTitle) {
    return `正在玩「${displayTitle}」喵~`;
  }

  return DEFAULT_DESCRIPTION;
}
