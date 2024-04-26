import { baseHelper } from '../theme/utils'
import { socialList } from '../theme/composables/socialList'
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
import type { CustomConfig } from './types'

export const META_URL = 'https://yuanshen.site/docs/'
export const META_TITLE = '原神地图'
export const META_DESCRIPTION = '空荧酒馆制作的原神全资源攻略地图。'
export const META_KEYWORDS =
  '原神地图, 空荧地图, 空荧酒馆原神地图, 空荧酒馆, 原神资源, yuanshen, Kongying Tavern'
export const META_IMAGE = 'https://yuanshen.site/docs/imgs/common/cover.jpg'
export const LOCAL_CODE = 'zh-CN'
export const LOCAL_BASE = ''

export const zhConfig: LocaleSpecificConfig<
  DefaultTheme.Config & CustomConfig
> = {
  titleTemplate: '空荧酒馆',
  description: META_DESCRIPTION,
  head: [
    ['meta', { property: 'og:site_name', content: META_TITLE }],
    ['meta', { property: 'og:locale', content: LOCAL_CODE }],
  ],
  themeConfig: {
    siteTitle: '原神地图',
    keyword: META_KEYWORDS,
    description: META_DESCRIPTION,
    image: META_IMAGE,
    outlineTitle: '本页目录',
    logo: '/imgs/common/logo/logo_256.png',
    lastUpdatedText: '更新日期',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '更改语言',
    notFound: {
      title: '这个页面找不到了',
      quote: '可能跟温迪一起出游了吧',
      linkLabel: '回到首页',
    },
    staff: {
      title: 'Staff',
      desc: '空荧酒馆『原神地图』项目参与制作',
      communityStaff: {
        title: '社区运营',
      },
      clientStaff: {
        title: '客户端开发',
      },
      webStaff: {
        title: '网页端开发',
      },
      translateStaff: {
        title: '本地化翻译',
      },
      pinStaff: {
        title: '地图点位标记',
      },
    },
    team: {
      title: '关于团队',
      desc: '地图的背后是一个基本来自中国的团队，以下是部分成员的个人信息。',
      coreMember: {
        title: '核心团队成员',
        desc: '核心团队成员是那些积极长期参与维护一个或多个核心项目的人。 他们对空荧酒馆的生态系统做出了重大贡献。',
      },
      emeritiMember: {
        title: '名誉核心团队',
        desc: '我们在此致敬过去曾做出过突出贡献的不再活跃的团队成员。',
      },
      partnerMember: {
        title: '社区伙伴',
        desc: '我们与这些主要合作伙伴建立了更加亲密的关系，经常与他们就即将到来的功能展开合作。',
      },
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kongying-tavern/' },
      { icon: 'discord', link: 'https://discord.gg/aFe57AKZUF' },
      { icon: 'x', link: 'https://twitter.com/KongyingTavern' },
      {
        icon: {
          svg: socialList.bilibili.icon,
        },
        link: 'https://space.bilibili.com/518076785',
        ariaLabel: 'bilibili',
      },
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    asideLinks: {
      title: '快捷链接',
      starOnGitHub: 'Star on GitHub',
      contactUsText: '加入Discord服务器',
      contactUsLink: 'https://discord.gg/SWz6RTWNkm',
      sponsor: '支持我们',
      editLink: '报告页面错误',
    },
    ui: {
      button: {
        submit: '提交',
        cancel: '取消',
      },
    },
    docsFeedback: {
      feedbackMsg: '这篇文档是否对你有帮助？',
      good: '有帮助',
      bad: '无帮助',
      feedbackFailMsg: '反馈失败，请重试或联系管理员（QQ：1961266616）！',
      feedbackSuccessMsg: '提交成功，感谢你的反馈！',
      badFeedbackSuccessMsg: '希望你能在下方告知我们具体问题~',
      form: {
        chooseIssues: '是否遇到以下问题？',
        translationIssue: '翻译问题',
        typosIssue: '错别字/标点符号',
        ContentImgLinkIssue: '文案表达不准确、图片加载失败或链接错误',
        feedbackDetail: '反馈内容/更多建议',
        feedbackTip: '请详细描述你在使用文档过程中遇到的问题或优化建议',
        otherIssue: '其他问题（请在反馈内容中具体描述）',
        contactWay: '联系方式（可选）',
        issueOptions: [
          { label: '页面显示错误', value: 'pagedisplay-issue' },
          { label: '错别字、标点符号错误', value: 'typos-issue' },
          { label: '内容表达有误、图片/文字链接错误', value: 'content-issue' },
          { label: '其他问题', value: 'other-issue' },
        ],
      },
    },
    payment: {
      wechatpay: {
        name: '微信支付',
        address: 'wxp://f2f0dd1rszrnqJc_gnlwV_lRX5dlZ1Dtn9rp',
      },
      alipay: {
        name: '支付宝',
        address: 'https://qr.alipay.com/tsx11609thmpw9odmvdlxd6',
      },
      qqpay: {
        name: 'QQ 支付',
        address:
          'https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&a=1&u=790489566&ac=CAEQ3tP3-AIY0v2k_AU%3D_xxx_sign&n=AAAAAAAA&f=wallet',
      },
      paypal: {
        name: 'PayPal',
        address: 'https://www.paypal.com/paypalme/yuanshenditu',
      },
      bilibili: {
        name: 'bilibili',
        address: 'https://space.bilibili.com/518076785',
      },
    },
    sidebar: baseHelper(sidebar(), LOCAL_BASE),
    footer: baseHelper(footer(), LOCAL_BASE),
    nav: baseHelper(nav(), LOCAL_BASE),
  },
}

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '客户端下载',
      link: '/download-client',
    },
    {
      text: '加入社区',
      link: '/community',
    },
    {
      text: '支持我们',
      link: '/support-us',
    },
    {
      text: '帮助和反馈',
      activeMatch: `^/manual/`,
      items: [
        {
          text: '客户端使用手册',
          link: 'manual/client-user-manual',
        },
        {
          text: '问题反馈',
          link: 'https://support.qq.com/products/321980',
        },
        {
          text: '功能介绍',
          link: 'https://support.qq.com/products/321980/faqs-more/?id=126362',
        },
        {
          text: '功能投票',
          link: 'https://support.qq.com/products/321980/topic-detail/2016/',
        },
      ],
    },
    {
      text: '了解更多',

      items: [
        {
          text: '了解我们',
          items: [
            {
              text: '加入我们',
              link: '/join',
            },
            {
              text: '了解团队',
              link: '/team',
            },
          ],
        },
        {
          text: '更新日志',
          items: [
            {
              text: '网页端',
              link: 'https://support.qq.com/products/321980/blog/505810',
            },
            {
              text: '客户端',
              link: 'https://support.qq.com/products/321980/blog/772498',
            },
          ],
        },
        {
          text: '鸣谢',
          items: [
            {
              text: '制作人员',
              link: '/staff',
            },
            {
              text: '赞助鸣谢',
              link: '/support-us#赞助鸣谢',
            },
            {
              text: '技术鸣谢',
              link: '/credits',
            },
          ],
        },
        {
          text: '法律相关',
          items: [
            {
              text: '免责声明',
              link: '/disclaimer',
            },
            {
              text: '隐私政策',
              link: '/privacy',
            },
            {
              text: '用户协议',
              link: '/agreement',
            },
          ],
        },
        {
          text: '其他',
          items: [
            {
              text: '参与翻译',
              link: '/translations',
            },
            {
              text: '友情链接',
              link: '/friends-links',
            },
          ],
        },
      ],
    },
  ]
}

function footer(): CustomConfig['footer'] {
  return {
    qrcodeTitle: '开发反馈群',
    qrcodeMessage: '欢迎QQ扫码联系我们',
    qrcodeLink: 'https://jq.qq.com/?_wv=1027&k=nbveGrfQ',
    navigation: [
      {
        title: '关于',
        items: [
          {
            text: '加入我们',
            link: '/join',
          },
          {
            text: '赞助鸣谢',
            link: '/support-us',
          },
          {
            text: '友情链接',
            link: '/friends-links',
          },
        ],
      },
      {
        title: '政策',
        items: [
          {
            text: '免责声明',
            link: '/disclaimer',
          },
          {
            text: '隐私政策',
            link: '/privacy',
          },
          {
            text: '用户协议',
            link: '/agreement',
          },
        ],
      },
      {
        title: '产品',
        items: [
          {
            text: '客户端使用手册',
            link: 'manual/client-user-manual',
          },
          {
            text: '客户端更新日志',
            link: 'https://support.qq.com/products/321980/blog/505884',
          },
          {
            text: '网页版更新日志',
            link: 'https://support.qq.com/products/321980/blog/505810',
          },
        ],
      },
    ],
  }
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return {
    // @ts-ignore
    '/manual': [
      {
        text: '目录',
        link: 'manual/client-user-manual',
      },
      {
        text: '使用帮助',
        collapsed: false,
        items: [
          {
            text: '【自动追踪】',
            items: [
              {
                text: '功能介绍',
                link: 'manual/guide/auto-tracking/importantnotes',
              },
              {
                text: '疑难解答',
                link: 'manual/guide/auto-tracking/troubleshoot',
              },
            ],
          },
          {
            text: '【地图性能占用高】前后台帧率设置',
            link: 'manual/guide/bg/bgfrate',
          },
          {
            text: '【批量选择】使用说明',
            link: 'manual/guide/batch-selection/instructions',
          },
          {
            text: '【画板】路线功能 教程',
            link: 'manual/guide/canvas/guide',
          },
          {
            text: '【彩蛋】查看历史版本内容',
            link: 'manual/guide/easter-egg/view',
          },
          {
            text: '【隐藏】标记/【显示】标记',
            link: 'manual/guide/hide-show-done/hidedoneshowdone',
          },
          {
            text: '【覆盖模式】',
            items: [
              {
                text: '使用说明',
                link: 'manual/guide/overlay-mode/instructions',
              },
              {
                text: '【窗口全屏】启动游戏',
                link: 'manual/guide/overlay-mode/fullscreen-windowed/launching',
              },
            ],
          },
          {
            text: '【存档丢失】存档还原/误删恢复',
            link: 'manual/guide/restore-recover/progress',
          },
        ],
      },
      {
        text: '常见问题',
        collapsed: false,
        items: [
          {
            text: '使用地图客户端会被封号吗？',
            link: 'manual/faq/accountsafety/acntban',
          },
          {
            text: '【自动更新】没有反应',
            link: 'manual/faq/autoupdate/updater',
          },
          {
            text: '安装错误',
            items: [
              {
                text: '错误码 2503',
                link: 'manual/faq/instlerror/code2503',
              },
              {
                text: '【无法安装】提示缺乏 dll 文件',
                link: 'manual/faq/instlerror/missingdll',
              },
            ],
          },
          {
            text: '【无法打开】',
            items: [
              {
                text: '空窗提示或卡进度条',
                link: 'manual/faq/launcherror/emptydialog',
              },
              {
                text: '“数据查询失败”、“版本查询失败”',
                link: 'manual/faq/launcherror/versioncheck',
              },
            ],
          },
          {
            text: '登录',
            items: [
              {
                text: '【不能登录】如何登录',
                link: 'manual/faq/login/accountlogin',
              },
              {
                text: '【每次打开都需重新登陆】',
                link: 'manual/faq/login/clientrepeatedly',
              },
            ],
          },
        ],
      },
    ],
  }
}
