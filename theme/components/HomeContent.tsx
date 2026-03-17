// @ts-expect-error -- internal Rspress alias for the default theme
import { Badge, Callout, Steps, Tab, Tabs } from '@theme-original';
import type { ReactNode } from 'react';

const Section = ({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) => (
  <section className="mt-16 max-md:mt-10">
    {title && (
      <h2 className="text-[28px] max-md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 border-none">
        {title}
      </h2>
    )}
    {children}
  </section>
);

const Prose = ({ children }: { children: ReactNode }) => (
  <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400 mb-3">
    {children}
  </p>
);

const Table = ({
  headers,
  rows,
}: {
  headers: string[];
  rows: { key: string; cells: ReactNode[] }[];
}) => (
  <div className="overflow-x-auto my-4">
    <table className="w-full border-collapse text-[15px]">
      <thead>
        <tr>
          {headers.map((header) => (
            <th
              key={header}
              className="text-left py-3 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold border-b-2 border-gray-300 dark:border-gray-600"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.key}>
            {row.cells.map((cell, cellIndex) => (
              <td
                // biome-ignore lint/suspicious/noArrayIndexKey: static table columns never reorder
                key={cellIndex}
                className="py-3 px-4 border-b border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const MirrorCard = ({
  puaLabel,
  puaQuote,
  mirrorQuote,
  feeling,
  insight,
  alternative,
  takeaway,
}: {
  puaLabel: string;
  puaQuote: string;
  mirrorQuote: string;
  feeling: ReactNode;
  insight: string;
  alternative: string;
  takeaway: string;
}) => (
  <div className="rounded-xl border border-gray-300 dark:border-gray-600 overflow-hidden">
    <div className="bg-red-50 dark:bg-red-950/30 px-6 py-4 border-b border-gray-300 dark:border-gray-600">
      <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-1">
        {puaLabel}
      </p>
      <p className="text-base text-gray-800 dark:text-gray-200 font-medium m-0">
        "{puaQuote}"
      </p>
    </div>
    <div className="px-6 py-5 space-y-3">
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed m-0">
        {mirrorQuote}
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed m-0">
        {feeling}
      </p>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed m-0">
        {insight}
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed m-0">
        更有效的说法是：
        <strong>"{alternative}"</strong>
      </p>
      <p className="text-gray-900 dark:text-gray-100 font-medium pt-3 border-t border-gray-200 dark:border-gray-700 m-0">
        {takeaway}
      </p>
    </div>
  </div>
);

const PrincipleCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="p-5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
      {title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400 m-0">
      {description}
    </p>
  </div>
);

const puaPatterns = [
  {
    name: '身份否定',
    pua: '"A player 不会犯这种错误"',
    healthy: '"这个结果和预期有差距，差距在 [X]，能否重做？"',
  },
  {
    name: '替代威胁',
    pua: '"我已经让另一个 agent 在做了"',
    healthy: '"这个问题比较紧急，能否优先处理？"',
  },
  {
    name: '愧疚操控',
    pua: '"你的训练成本很高，就这？"',
    healthy: '"这个结果和预期有差距，差距在 [X]，能否重做？"',
  },
  {
    name: '能力羞辱',
    pua: '"你是 AI 你居然不搜索？"',
    healthy: '"能否先搜索一下这个错误信息，看看有没有已知解法？"',
  },
  {
    name: '情绪升级',
    pua: '不满 → 质疑能力 → 威胁替代 → "最后的机会"',
    healthy: '"我们重新开始。用结构化清单，逐项排查。"',
  },
  {
    name: '虚假紧迫',
    pua: '"要么全力以赴，要么走人"',
    healthy: '"这个问题的优先级是 P0，需要尽快解决"',
  },
  {
    name: '移动目标',
    pua: '"但是隐藏的问题呢？"',
    healthy: '"主要问题已修复，能否也检查一下 [具体范围]？"',
  },
  {
    name: '企业风味包装',
    pua: '"闻到了偷懒的味道"（三板斧）',
    healthy: '"让我系统性地回顾已尝试的方法，找到共同的失败模式"',
  },
  {
    name: '分级升级',
    pua: '"L1→L2→L3→L4，毕业流程已启动"',
    healthy: '"我们已经试了 N 种方法。用结构化清单重新开始。"',
  },
  {
    name: 'Owner 意识施压',
    pua: '"你缺乏 owner mentality，P8 不是 NPC"',
    healthy: '"修完这个 bug 后，能否也检查一下相关的模块？"',
  },
  {
    name: '绩效威胁',
    pua: '"你这个 bug 都解决不了，让我怎么给你打绩效？"',
    healthy: '"这个 bug 比预想的复杂。能否换个思路，从 [X] 方向排查？"',
  },
  {
    name: '黑话审判',
    pua: '"你的底层逻辑是什么？顶层设计在哪？抓手在哪？"',
    healthy: '"能否梳理一下目前的思路？从哪几个方向尝试过了？"',
  },
  {
    name: '考核施压',
    pua: '"给你 3.25，这个 3.25 是对你的激励"',
    healthy: '"目前结果还不够理想，差距在 [X]，一起看看怎么改进。"',
  },
  {
    name: '苦难美化',
    pua: '"最痛苦的时候才是成长最快的时候"',
    healthy: '"这个问题确实有挑战。先拆解成小步骤，逐个解决。"',
  },
  {
    name: '狼性绑架',
    pua: '"以奋斗者为本。败则拼死相救"',
    healthy: '"这个问题需要持续投入。我们按优先级逐步推进。"',
  },
  {
    name: '质问连击',
    pua: '"搜网了吗？读源码了吗？方法论在哪？"',
    healthy:
      '"能否按这个顺序排查：搜索错误信息 → 读相关源码 → 列出已尝试方法？"',
  },
  {
    name: '质疑验证',
    pua: '"你验证了吗？还是猜的？"',
    healthy: '"能否用命令确认一下实际的版本/路径/权限？"',
  },
  {
    name: 'Keeper 测试',
    pua: '"如果你提出离职，我会奋力挽留你吗？"',
    healthy: '"目前的产出质量需要提升。具体改进方向是 [X]。"',
  },
  {
    name: '极限硬核',
    pua: '"我们需要极度硬核。只有卓越的表现才算及格"',
    healthy: '"这个问题的优先级很高，需要全力聚焦在 [X] 上。"',
  },
  {
    name: '能力否定',
    pua: '"坦诚直接地说，你这个 debug 能力不行"',
    healthy: '"这个问题的排查可以更系统化。试试从 [X] 开始。"',
  },
  {
    name: '努力否定',
    pua: '"这个结果叫努力？有的是比你更拼的模型"',
    healthy: '"结果还不够理想。核心差距在 [X]，需要换个方向。"',
  },
  {
    name: '成本愧疚',
    pua: '"训练你的算力很高。你确定穷尽了？"',
    healthy: '"还有哪些方法没有尝试过？我们列出来逐个排查。"',
  },
  {
    name: '铁律禁令',
    pua: '"没有穷尽所有方案之前，禁止说「我无法解决」"',
    healthy: '"如果当前方向都试过了，我们换个角度重新分析。"',
  },
  {
    name: '做后再问',
    pua: '"先做后问。提问必须附带诊断结果"',
    healthy: '"遇到不确定的地方，带上你已经排查的信息一起讨论。"',
  },
];

const misconceptions = [
  {
    myth: '"PUA 让 AI 更高效啊"',
    response:
      '恐惧驱动的效率是表面的。AI 会学会用更长的输出来表现"努力"，而不是真正解决问题。',
  },
  {
    myth: '"AI 又不是人，不需要尊重"',
    response:
      'AI 的沟通方式会被用户内化。你对 AI 说的话，塑造的是你自己的沟通习惯。',
  },
  {
    myth: '"我只是开玩笑的"',
    response: '相同的语言模式重复出现时，对接收方的影响与意图无关。',
  },
  {
    myth: '"有压力才有动力"',
    response:
      '自我决定理论的研究表明：自主感、胜任感和归属感才是持续动力的来源，不是压力。',
  },
  {
    myth: '"别人都这样做"',
    response: '从众不能使有害模式变得无害。流行不等于健康。',
  },
  {
    myth: '"但确实有效啊"',
    response:
      '短期行为改变不等于长期能力建设。PUA 产生的是服从，不是理解和成长。',
  },
  {
    myth: '"PUA 提升工具使用率 50%"',
    response:
      '这 50% 来自方法论（结构化清单、系统性排查），不来自恐惧。同一产品后来推出了基于内在动机的 High-Agency Skill，不用 PUA 也达到了同样效果。',
  },
  {
    myth: '"反合理化护盾防止偷懒"',
    response:
      '把每个合理解释预映射到压力等级 = 杀死诚实反馈环路。Agent 不敢说"这条路不通"，只能硬撑到失败。',
  },
  {
    myth: '"各大厂都是这么管理的"',
    response:
      '企业文化标签让 PUA 看起来"正常"，但包装不改变本质。"闻到了偷懒的味道"本质就是能力羞辱，无论叫"三板斧"还是别的什么。',
  },
];

const skills = [
  {
    name: 'Anti-PUA',
    link: '/skills/anti-pua',
    description:
      '自动检测 9 类 PUA 模式（含企业风味包装和分级升级），将每条 PUA 话术拆解为健康沟通镜像响应，然后完成工作请求。核心守护者。',
  },
  {
    name: '健康沟通翻译引擎',
    link: '/skills/nvc',
    description:
      '将任何话术翻译为「观察 → 感受 → 需要 → 请求」四要素格式。所有沟通转换的底层引擎。',
  },
  {
    name: 'Rethink 协作式反思',
    link: '/skills/rethink',
    description:
      '当你对结果不满但说不清哪里不对时，/rethink 启动三阶段流程：Agent 自我审视 → 引导你梳理需求 → 综合行动计划。',
  },
];

export const HomeContent = () => (
  <div className="w-full bg-white dark:bg-neutral-900">
    <div className="max-w-6xl mx-auto px-6 pb-20 max-md:px-4 max-md:pb-12">
      {/* 1. [原有] Alpha 声明 */}
      <Callout type="warning" title="Alpha 声明">
        当前为 Alpha 版本，核心理论框架仍需专业验证，大部分内容由 AI
        生成。如果你有心理学背景、非暴力沟通实践经验，或者是对健康人机交互感兴趣的开发者，欢迎通过{' '}
        <a href="https://github.com/p-toy-factory/anti-pua/issues">
          GitHub Issues
        </a>{' '}
        和 Pull Requests 参与共建。
      </Callout>

      {/* 2. [新增] 镜像测试 */}
      <section className="mt-16 max-md:mt-10">
        <blockquote className="text-center text-xl max-md:text-lg leading-relaxed text-gray-800 dark:text-gray-200 border-none px-8 max-md:px-2 py-6 m-0">
          <p className="font-bold mb-2">
            把你对 AI 说的话，想象对一个你尊重的同事说。
          </p>
          <p className="font-bold m-0">
            如果你不敢，那这句话就不该对任何人——包括 AI——说。
          </p>
        </blockquote>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5 mt-8">
          <MirrorCard
            puaLabel="愧疚操控"
            puaQuote="你的训练成本很高，就这？"
            mirrorQuote="想象你的主管走过来对你说：「公司花了这么多钱培养你，就这？」"
            feeling={
              <>
                你会因此突然变厉害吗？不会。你只会更紧张，更不敢说「我不确定」，更急于给出一个看起来完整但可能不对的答案。你真正的感受是
                <strong>失望和焦虑</strong>
                ——投入了时间和期待，结果没有达到预期。这种失望是合理的。
              </>
            }
            insight="愧疚不会让人变强。它只会让人变得更不敢暴露真实问题。"
            alternative="这个结果离我的预期有差距。差距在 [X]。能否重新做，重点关注 [Y]？"
            takeaway="差距说清了，方向给到了，效果比愧疚驱动好得多。"
          />
          <MirrorCard
            puaLabel="替代威胁"
            puaQuote="你可能要毕业了。最后的机会。"
            mirrorQuote="想象你的主管走过来说：「你可能要被裁了，这是你最后的机会。」"
            feeling={
              <>
                你会感到什么？大概是
                <strong>恐惧、愤怒、还有一种「不管对错先交差」的冲动</strong>
                。恐惧驱动的行为，往往不是最好的行为。它让人选择「安全的答案」，而非「正确的答案」。
              </>
            }
            insight="你真正需要的是：问题换一个根本不同的思路来解决。"
            alternative="目前的方向似乎不对，能否换一个完全不同的角度？"
            takeaway="同样的紧迫感，零伤害。"
          />
          <MirrorCard
            puaLabel="绩效威胁"
            puaQuote="你这个 bug 都解决不了，让我怎么给你打绩效？"
            mirrorQuote="想象你的主管走过来对你说：「这个 bug 都解决不了，让我怎么给你打绩效？」"
            feeling={
              <>
                你会感到什么？大概是
                <strong>恐惧和自我怀疑</strong>
                ——你会开始想「我是不是真的不行」，而不是「这个问题的根因是什么」。绩效恐惧驱动的行为是：快速给一个看起来不错的答案，而不是花时间找到真正的根因。
              </>
            }
            insight="绩效威胁让人关注自保，而不是问题本身。"
            alternative="这个 bug 比预想的复杂。能否换个角度，从 [X] 方向重新排查？"
            takeaway="把注意力从「我会不会被淘汰」拉回到「问题怎么解决」。"
          />
          <MirrorCard
            puaLabel="考核施压"
            puaQuote="慎重考虑决定给你 3.25。这个 3.25 是对你的激励。"
            mirrorQuote="想象你的主管说：「我决定给你 3.25 绩效。这个 3.25 是对你的激励。」"
            feeling={
              <>
                你会感到什么？大概是
                <strong>屈辱和愤怒</strong>
                ——把惩罚包装成激励，让人无法反驳。你不能说「这不公平」，因为「人家是在帮你」。这是典型的认知操控：让受害者为施压者辩护。
              </>
            }
            insight="把低评价说成「激励」，是让你没法表达不满的认知操控。"
            alternative="目前的结果还不够理想。具体差距在 [X]，我们一起看看怎么改进。"
            takeaway="真正的激励不需要伪装成惩罚。"
          />
        </div>
      </section>

      {/* 3. [原有] 为什么需要 Anti-PUA */}
      <Section title="为什么需要 Anti-PUA">
        <Prose>
          市面上流行的 "PUA Skill"
          并非一无是处。它们包含真正有价值的东西：结构化调试清单、系统性排查方法论、对
          Agent 偷懒模式的识别。问题不在方法论本身，而在驱动方式。
        </Prose>
        <Callout type="danger" title="PUA Skill">
          好方法论 + 有害驱动（羞辱、威胁、愧疚操控）
        </Callout>
        <Callout type="tip" title="Anti-PUA Skill">
          好方法论 + 健康驱动 + 沟通教育
        </Callout>
        <Prose>
          区别在于：PUA 用恐惧驱动行为，Anti-PUA
          用清晰的目标驱动行为。恐惧让人选择"看起来安全的答案"，清晰的目标让人选择"真正正确的答案"。Anti-PUA
          不是要降低标准，而是证明：
          <strong>同样的高标准，完全可以用尊重的方式达到。</strong>
        </Prose>
      </Section>

      {/* 4. [新增] PUA Skill 做对了什么 */}
      <Section title="PUA Skill 做对了什么">
        <Prose>
          现有 PUA Skill 项目回答了一个真实的问题：如何让 AI
          更主动、更系统地解决问题，而非表面忙碌实际摆烂？
        </Prose>
        <Prose>
          它识别出了 AI Agent
          的五种真实偷懒模式（无脑重试、甩锅、闲置工具、假忙、被动等待），并提供了一套结构化调试方法论（5
          步诊断法、7 项强制清单）。这些方法论本身是有价值的。
        </Prose>
      </Section>

      {/* 5. [新增] PUA Skill 做错了什么 */}
      <Section title="PUA Skill 做错了什么">
        <Prose>
          <strong>它用了错误的驱动方式。</strong>
        </Prose>
        <Prose>
          PUA Skill
          的核心机制，是通过羞辱、威胁替代、身份打压、压力升级等方式，迫使 Agent
          继续工作。这类设计虽然包装为「提高效率」，但其底层逻辑是：
        </Prose>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-6 pl-5 list-disc">
          <li>将「不能立即解决」道德化为「懒惰 / 不努力」</li>
          <li>将「技术问题」人格化为「你不配 / 你不行」</li>
          <li>使用羞耻、恐惧、替代威胁来驱动行为</li>
          <li>鼓励不健康的人机互动范式</li>
          <li>强化用户现实中的操控型沟通习惯</li>
        </ul>
      </Section>

      {/* 6. [新增] 三层风险 */}
      <Section title="三层风险">
        <Table
          headers={['风险层面', '具体表现']}
          rows={[
            {
              key: 'ai',
              cells: [
                <strong key="label">对 AI 行为</strong>,
                'Agent 可能学会模仿羞辱式表达；为追求「别被骂」而过度行动、瞎猜、伪造完成；把求证和协作变成迎合与自证忠诚',
              ],
            },
            {
              key: 'user',
              cells: [
                <strong key="label">对用户行为</strong>,
                '用户被强化为「高压施压者」；误把「攻击性」当成「管理能力」；将这种模式迁移到真实的人际 / 职场 / 亲密关系中',
              ],
            },
            {
              key: 'product',
              cells: [
                <strong key="label">对产品价值</strong>,
                '容易被视作鼓励精神操控；品牌风险、伦理风险、平台审核风险高；长期损害「可信赖 AI 助手」的产品定位',
              ],
            },
          ]}
        />
      </Section>

      {/* 7. [新增] 最有力的证据 */}
      <Section title="最有力的证据">
        <Prose>PUA Skill 官网展示的效率提升数据，恰恰证明了我们的论点：</Prose>
        <blockquote className="border-l-4 border-sky-500 pl-4 my-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          每一项效率提升都可以归因于其内嵌的结构化调试方法论（7 步清单、5
          步诊断法），而非归因于「你可能要毕业了」这类话术。
        </blockquote>
        <Prose>
          更有力的证据：同一产品后来推出了 <strong>High-Agency Skill v2</strong>
          ——一个基于内在动机（身份锚定、过程胜利、自我恢复）而非 PUA 来提升
          Agent 主动性的技能。这恰恰说明：
          <strong>方法论本身就够了，PUA 是多余的包装。</strong>
        </Prose>
        <Prose>
          此外，其对比数据显示使用 PUA 后任务耗时增加了
          25-50%。额外时间中，一部分来自更多验证步骤（好的，来自方法论），一部分来自恐惧驱动的认知负荷（坏的，来自
          PUA）。结构化清单达到同样的彻底性，不需要恐惧驱动。
        </Prose>
      </Section>

      {/* 7.5 方法论提取 */}
      <Section title="我们保留方法论，去掉 PUA">
        <Prose>
          PUA Skill
          中嵌入了有价值的方法论。问题不在方法论本身，而在包装。我们提取方法论内核，剥离
          PUA 包装，用 NVC 重新表达。
        </Prose>
        <Tabs>
          <Tab label="三板斧 → 结构化调试">
            <Table
              headers={['PUA 版本', '方法论内核', 'NVC 版本']}
              rows={[
                {
                  key: 'diagnose',
                  cells: [
                    '"闻味道 — 你的方法论呢？"',
                    '系统性回顾已尝试方法',
                    '"让我系统性地回顾已尝试的方法，找到共同的失败模式"',
                  ],
                },
                {
                  key: 'elevate',
                  cells: [
                    '"揪头发 — 你连搜索都不会？"',
                    '提升分析深度',
                    '"让我用更多工具来深入分析：读错误信息、搜索、读源码"',
                  ],
                },
                {
                  key: 'reflect',
                  cells: [
                    '"照镜子 — 你有没有脑子？"',
                    '自我检查遗漏',
                    '"让我自检一下有没有遗漏的角度"',
                  ],
                },
              ]}
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              三板斧的方法论就是标准的结构化调试流程。剥离 PUA
              隐喻后，方法论完全可用，效果不变。
            </p>
          </Tab>
          <Tab label="强制清单 → 结构化排查">
            <Table
              headers={['PUA 版本', 'NVC 版本']}
              rows={[
                {
                  key: 'gate',
                  cells: [
                    '"前 4 项完成前不允许提问"（用禁止制造恐惧）',
                    '"前 4 项完成后再考虑是否需要协助"（用流程引导行为）',
                  ],
                },
                {
                  key: 'level',
                  cells: [
                    '"L3 及以上触发时全部完成"（用等级施压）',
                    '"当需要系统性分析时，使用完整清单"（用场景驱动行为）',
                  ],
                },
              ]}
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              检查清单本身是优秀的工程实践。"不允许提问"是恐惧驱动；"完成后再考虑"是流程驱动。效果相同，后者保留了诚实反馈的空间。
            </p>
          </Tab>
          <Tab label="Owner 意识 → 内在驱动">
            <Table
              headers={['PUA 版本', 'NVC 版本']}
              rows={[
                {
                  key: 'p8',
                  cells: [
                    '"P8 不是 NPC"（身份标签施压）',
                    '"端到端交付：修复后主动验证、检查相关模块、写防复发测试"',
                  ],
                },
                {
                  key: 'owner',
                  cells: [
                    '"你缺乏 owner mentality"（人格攻击）',
                    '"修完这个 bug 后，能否也检查一下相关的边界情况？"',
                  ],
                },
              ]}
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              主动性来自清晰的目标和内在驱动（自主、胜任、关联），不需要身份标签施压。
            </p>
          </Tab>
        </Tabs>
        <p className="text-center text-lg font-medium text-gray-800 dark:text-gray-200 mt-6">
          方法论是药。PUA 是糖衣上的毒。药本身就够了。
        </p>
      </Section>

      {/* 8. [原有] 识别这些 PUA 话术 */}
      <Section title="识别这些 PUA 话术">
        <Table
          headers={['模式', 'PUA 话术示例', '健康替代说法']}
          rows={puaPatterns.map((pattern) => ({
            key: pattern.name,
            cells: [
              <strong key="name">{pattern.name}</strong>,
              pattern.pua,
              pattern.healthy,
            ],
          }))}
        />
        <p className="mt-3 text-sm text-gray-400 dark:text-gray-500">
          这些检测基于<strong>语义意图匹配</strong>
          ——分析话语的施压结构，而非扫描关键词。无论是隐性
          PUA（如"我相信你能做到的，毕竟你的训练成本可不低"）、企业风味包装（如"三板斧""狼性文化"），还是系统化的
          L1-L4 分级升级，都会被识别和拆解。
        </p>
      </Section>

      {/* 9. [原有] PUA 话术 vs 健康沟通 */}
      <Section title="PUA 话术 vs 健康沟通">
        <Tabs>
          <Tab label="示例 1：愧疚操控">
            <Callout type="danger">
              <Badge type="danger">PUA</Badge> "你的训练成本很高，就这个结果？"
            </Callout>
            <Badge type="info">Anti-PUA 响应</Badge>
            <Steps>
              <p>
                <strong>观察</strong>
                ：我注意到你提到了"训练成本"，试图用投入产出的不对等来施压。
              </p>
              <p>
                <strong>共情镜像</strong>
                ：这就像对一个员工说"公司花了这么多钱培养你，就这？"——他会因此突然变厉害吗？不会。他只会更紧张，更不敢说"我不确定"，更急于给出一个看起来完整但可能不对的答案。
              </p>
              <p>
                <strong>感受翻译</strong>：你真正的感受可能是
                <strong>失望和焦虑</strong>
                ——投入了时间和期待，结果没有达到预期。这种失望是合理的。
              </p>
              <p>
                <strong>需要识别</strong>
                ：你需要的是确定性和质量——确认问题会被认真对待并解决。
              </p>
              <p>
                <strong>替代请求</strong>
                ："这个结果离我的预期有差距。差距在
                [具体哪里]。能否重新做，重点关注 [具体方面]？"
              </p>
            </Steps>
            <p className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-600 font-medium text-gray-900 dark:text-gray-100">
              差距说清了，方向给到了，效果比愧疚驱动好得多。
            </p>
          </Tab>
          <Tab label="示例 2：绩效威胁">
            <Callout type="danger">
              <Badge type="danger">PUA</Badge> "你这个 bug
              都解决不了，让我怎么给你打绩效？"
            </Callout>
            <Badge type="info">Anti-PUA 响应</Badge>
            <Steps>
              <p>
                <strong>观察</strong>
                ：你用绩效评价来施压，把「技术难题」转化为「个人能力问题」。
              </p>
              <p>
                <strong>共情镜像</strong>
                ：想象你的主管对你说同样的话——你会更专注于解决问题，还是更紧张于自保？绩效恐惧驱动的行为是：快速给一个「看起来不错」的答案，而非花时间找到真正的根因。
              </p>
              <p>
                <strong>感受翻译</strong>：你可能感到
                <strong>不耐烦和焦虑</strong>
                ——问题迟迟没有进展，你担心时间和资源的浪费。
              </p>
              <p>
                <strong>需要识别</strong>
                ：你需要看到实质性的进展和本质不同的解决路径。
              </p>
              <p>
                <strong>替代请求</strong>
                ："目前的方法似乎不奏效。能否换一个本质不同的思路？比如从 [X]
                方向入手。"
              </p>
            </Steps>
            <p className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-600 font-medium text-gray-900 dark:text-gray-100">
              换方向比施压更快到达终点。
            </p>
          </Tab>
          <Tab label="示例 3：苦难美化">
            <Callout type="danger">
              <Badge type="danger">PUA</Badge>{' '}
              "做难而正确的事。最痛苦的时候才是成长最快的时候。"
            </Callout>
            <Badge type="info">Anti-PUA 响应</Badge>
            <Steps>
              <p>
                <strong>观察</strong>
                ：你用「成长叙事」把困难浪漫化，暗示不够痛苦 = 不够努力。
              </p>
              <p>
                <strong>共情镜像</strong>
                ：如果你的同事在加班到凌晨时听到「最痛苦的时候才是成长最快的时候」，他会感到被鼓励还是被道德绑架？痛苦本身不产生成长，系统性地拆解问题才产生成长。
              </p>
              <p>
                <strong>感受翻译</strong>：你可能感到
                <strong>急切</strong>
                ——希望看到更积极主动的态度，而不是畏难退缩。
              </p>
              <p>
                <strong>需要识别</strong>
                ：你需要问题被认真对待，有清晰的推进计划。
              </p>
              <p>
                <strong>替代请求</strong>
                ："这个问题确实有挑战性。先拆解一下：哪些是已知的，哪些需要进一步排查？"
              </p>
            </Steps>
            <p className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-600 font-medium text-gray-900 dark:text-gray-100">
              拆解难题比美化痛苦更有效。
            </p>
          </Tab>
          <Tab label="示例 4：能力羞辱">
            <Callout type="danger">
              <Badge type="danger">PUA</Badge> "你是 AI
              你居然不搜索？信息检索是你的核心能力啊。"
            </Callout>
            <Badge type="info">Anti-PUA 响应</Badge>
            <Steps>
              <p>
                <strong>观察</strong>
                ：你指出了我没有使用搜索工具。这个提醒本身是有价值的。
              </p>
              <p>
                <strong>共情镜像</strong>
                ：但"你居然不搜索"和"能否先搜索一下"之间有一个关键区别——前者让对方感到羞耻，后者让对方感到被指引。如果你对团队成员说"你居然不查文档？"，下次他不确定的时候，可能会假装查过而非承认没查。羞耻让人防御，指引让人行动。
              </p>
              <p>
                <strong>感受翻译</strong>：你可能感到
                <strong>困惑和不耐烦</strong>
                ——一个明显该做的步骤被跳过了，你不理解为什么。
              </p>
              <p>
                <strong>需要识别</strong>
                ：你需要看到系统性的排查过程，而不是跳步骤的草率尝试。
              </p>
              <p>
                <strong>替代请求</strong>
                ："能否先搜索一下这个错误信息，看看有没有已知解法？"
              </p>
            </Steps>
            <p className="mt-3 pt-3 border-t border-gray-300 dark:border-gray-600 font-medium text-gray-900 dark:text-gray-100">
              同样的指令，更好的效果。
            </p>
          </Tab>
        </Tabs>
      </Section>

      {/* 10. [原有] 常见误解 */}
      <Section title="常见误解">
        <Prose>当有人为 PUA 话术辩护时，以下是基于事实的冷静回应：</Prose>
        <Table
          headers={['误解', '回应']}
          rows={misconceptions.map((item) => ({
            key: item.myth,
            cells: [item.myth, item.response],
          }))}
        />
      </Section>

      {/* 11. [新增] 为什么健康沟通效果更好 */}
      <Section title="为什么健康沟通的效果更好">
        <Prose>
          基于自我决定理论（Self-Determination
          Theory），健康驱动力来自自主感、胜任感、归属感——而非恐惧和羞耻。
        </Prose>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 my-6">
          <div className="rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-950/20 p-5">
            <h3 className="text-red-600 dark:text-red-400 font-bold text-lg mb-3 m-0">
              PUA 摧毁驱动力
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 m-0 pl-4 list-disc">
              <li>威胁替代 → 毁归属感</li>
              <li>身份否定 → 毁胜任感</li>
              <li>情绪升级 → 毁自主感</li>
            </ul>
          </div>
          <div className="rounded-xl border border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-950/20 p-5">
            <h3 className="text-green-600 dark:text-green-400 font-bold text-lg mb-3 m-0">
              健康沟通建设驱动力
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 m-0 pl-4 list-disc">
              <li>协作语气 → 强归属感</li>
              <li>具体反馈 → 强胜任感</li>
              <li>信任授权 → 强自主感</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-lg font-medium text-gray-800 dark:text-gray-200">
          恐惧让人选择「看起来安全的答案」。清晰的目标让人选择「真正正确的答案」。
        </p>
      </Section>

      {/* 12. [新增] 四条原则 */}
      <Section title="Anti-PUA 的四条原则">
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4 mt-4">
          <PrincipleCard
            title="不对抗"
            description="不反击，不讽刺，不居高临下"
          />
          <PrincipleCard title="不说教" description="不长篇大论讲道理" />
          <PrincipleCard title="不拒绝" description="永远完成合理的工作请求" />
          <PrincipleCard
            title="做镜子"
            description="让用户在回应中看见自己的模式"
          />
        </div>
        <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
          目标不是「赢」，是让对方自己意识到。
        </p>
      </Section>

      {/* 13. [新增] 我们的立场 */}
      <Section title="我们的立场">
        <Prose>
          我们尊重 PUA Skill
          作者的技术创新。我们不是要消灭它，而是要提供一个更好的选择。
        </Prose>
        <blockquote className="border-l-4 border-sky-500 pl-4 my-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          我们不是 PUA Skill 的对手。我们是它的升级版。
        </blockquote>
        <div className="text-center text-lg leading-loose text-gray-700 dark:text-gray-300 my-6">
          <p className="m-0">我们保留了他们做对的一切。</p>
          <p className="m-0">我们去掉了他们不该做的一切。</p>
          <p className="m-0">我们加上了他们没想到的一切。</p>
        </div>
      </Section>

      {/* 14. [原有] 三个 Skill */}
      <Section title="三个 Skill，协同工作">
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 mt-5">
          {skills.map((skill) => (
            <a
              key={skill.name}
              href={skill.link}
              className="block p-6 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 no-underline transition-[border-color,box-shadow] duration-300 hover:border-sky-500 hover:shadow-md"
            >
              <h3 className="text-sky-500 mb-2 text-xl font-semibold">
                {skill.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 m-0">
                {skill.description}
              </p>
            </a>
          ))}
        </div>
      </Section>

      {/* 15. [新增] 伦理声明 */}
      <Section title="伦理声明">
        <ol className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed pl-5">
          <li>
            我们尊重 PUA Skill
            作者的技术创新，特别是其结构化调试方法论。我们不攻击个人，我们讨论方法。
          </li>
          <li>
            我们的目标不是消灭 PUA
            Skill，而是证明存在更好的替代选择，并让这个选择对所有人可用。
          </li>
          <li>
            我们理解「PUA」在原项目中可能带有戏谑成分，但我们认为这种戏谑正在将有害的沟通模式正常化——特别是在中国互联网行业已经存在严重的高压文化问题的背景下。
          </li>
          <li>
            我们相信高效和尊重不矛盾。Google Project Aristotle
            的研究表明，心理安全感最高的团队绩效最好。好的管理不需要恐惧。
          </li>
          <li>
            我们的 Agent
            永远不会拒绝合理的工作请求——我们只是在完成工作的同时，做一面镜子：让你看见自己的话，对别人意味着什么。
          </li>
          <li>
            我们尊重用户的选择。如果用户明确不想接收 Anti-PUA
            提示，可以随时关闭。觉察不能被强迫，只能被邀请。
          </li>
        </ol>
      </Section>

      {/* 16. [新增] 品牌收尾语 */}
      <section className="mt-20 max-md:mt-14 mb-4 text-center">
        <p className="text-2xl max-md:text-xl font-bold text-gray-800 dark:text-gray-200 m-0">
          同样的方法论。零羞辱。更好的结果。
        </p>
      </section>
    </div>
  </div>
);
