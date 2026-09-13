// AUREN — Tarot Deck Data
// Complete 78-card deck with interpretations
const TAROT_DECK = [
  {
    id: 'major-0-fool',
    name: 'The Fool',
    arcana: 'major',
    suit: null,
    number: 0,
    symbol: '☽',
    uprightKeywords: ['beginnings', 'innocence', 'spontaneity', 'adventure', 'freedom'],
    reversedKeywords: ['recklessness', 'naivety', 'foolishness', 'risk', 'chaos'],
    upright: {
      general: 'The Fool heralds a new chapter — a leap into the unknown with open arms and an unguarded heart. There is courage in this card\'s innocence, a willingness to begin without guarantees.',
      love: 'A new romantic adventure is beginning, one that feels electric and uncharted. You are invited to approach love with openness rather than strategy, allowing connection to unfold naturally.',
      career: 'A bold career leap is on the horizon — perhaps a new role, an unexpected opportunity, or the courage to start something entirely your own. Trust the pull toward something unfamiliar.',
      money: 'Financially, the Fool asks you to take a calculated risk rather than cling to the familiar. New income streams or unexpected windfalls may appear, but only if you step forward.',
      relationships: 'You are entering a relationship with fresh eyes, free of past baggage. This is a beautiful gift — allow yourself to be vulnerable and curious with others rather than guarded.',
      growth: 'The deepest growth comes from stepping off the cliff of certainty. The Fool teaches that true wisdom begins in not-knowing, and that every great journey starts with a single, trusting step.'
    },
    reversed: {
      general: 'Reversed, the Fool signals recklessness disguised as freedom — jumping without looking, ignoring red flags, or refusing to plan at all. Pause before you leap.',
      love: 'You may be rushing into a relationship without fully seeing it clearly, or sabotaging something good with erratic behavior. Slow down and let the connection develop with more intention.',
      career: 'Impulsive decisions at work could undermine your progress. This is not the time to quit without a plan or make sweeping changes based on a whim — take stock before acting.',
      money: 'Financial recklessness is highlighted here — spending impulsively, ignoring budgets, or taking risks you can\'t afford. Ground yourself in practical reality before making any big moves.',
      relationships: 'You or someone close may be behaving immaturely or creating unnecessary chaos. Commitment feels scary and you might be sabotaging stable connections out of a fear of losing freedom.',
      growth: 'Growth is being blocked by an unwillingness to take responsibility. The reversed Fool asks: are you hiding behind spontaneity to avoid the harder work of showing up consistently?'
    }
  },
  {
    id: 'major-1-magician',
    name: 'The Magician',
    arcana: 'major',
    suit: null,
    number: 1,
    symbol: '✦',
    uprightKeywords: ['willpower', 'skill', 'manifestation', 'resourcefulness', 'power'],
    reversedKeywords: ['manipulation', 'illusion', 'untapped potential', 'deceit', 'wasted talent'],
    upright: {
      general: 'The Magician stands at the crossroads of intention and action, wielding all four elemental tools with mastery. You have everything you need — the question is whether you will use it.',
      love: 'In love, the Magician signals the power to create the relationship you truly desire. You have the charm, clarity, and tools to attract and build genuine connection — use them with integrity.',
      career: 'Your skills and talents are fully aligned right now, making this an ideal time to launch a project or showcase your abilities. Confidence backed by real competence is your greatest asset.',
      money: 'Financial manifestation is strongly favored. You have the resourcefulness to attract abundance — whether through a new hustle, a smart investment, or leveraging skills you already possess.',
      relationships: 'You bring a magnetic, capable energy to your relationships. People are drawn to your confidence and competence, and you have the power to shape dynamics with intentional communication.',
      growth: 'The Magician reminds you that transformation begins with directed will. You are not a passive participant in your own life — you are the architect, and your focused intention shapes reality.'
    },
    reversed: {
      general: 'Reversed, the Magician suggests power being used deceptively — either by you or toward you. There may be illusions, broken promises, or talents being squandered on unworthy goals.',
      love: 'Manipulation or dishonesty may be present in a romantic connection. Someone may be playing a role rather than showing their true self, or you may be using charm as a shield against real intimacy.',
      career: 'Untapped potential is going to waste. You may know what you\'re capable of but keep finding reasons to delay — or someone in your environment is using their skills against the collective good.',
      money: 'Be wary of get-rich-quick schemes or financial advisors who seem too polished. The reversed Magician warns of illusions dressed as opportunity — scrutinize promises carefully.',
      relationships: 'Power plays and hidden agendas may be poisoning a relationship. Consider whether you or someone else is using persuasion as a tool for control rather than genuine connection.',
      growth: 'You are resisting the very power you carry. The reversed Magician urges you to stop hiding behind doubt and start channeling your gifts with honesty and purpose.'
    }
  },
  {
    id: 'major-2-high-priestess',
    name: 'The High Priestess',
    arcana: 'major',
    suit: null,
    number: 2,
    symbol: '◎',
    uprightKeywords: ['intuition', 'mystery', 'inner knowing', 'subconscious', 'wisdom'],
    reversedKeywords: ['secrets', 'disconnection', 'repression', 'confusion', 'silence'],
    upright: {
      general: 'The High Priestess sits at the veil between the seen and unseen, inviting you to trust what cannot be explained rationally. Your intuition is your most reliable compass right now.',
      love: 'In love, something is left unspoken — and perhaps deliberately so. The High Priestess counsels patience; not everything needs to be said aloud. Let the mystery deepen the connection.',
      career: 'Your instincts about a work situation are likely correct, even if you can\'t yet articulate why. Pay attention to what you sense beneath the surface before making any major decisions.',
      money: 'Financial guidance is coming from within rather than from external advisors. Sit quietly with major financial decisions and wait for a knowing that transcends logic before acting.',
      relationships: 'There is more happening beneath the surface of a key relationship than either party is admitting. The High Priestess asks you to listen to what is felt, not just what is said.',
      growth: 'Your most profound growth right now comes through stillness, journaling, and inner listening. The answers you seek are already within you — you need only create space to hear them.'
    },
    reversed: {
      general: 'Reversed, the High Priestess suggests that intuition is being suppressed or ignored — drowned out by noise, anxiety, or an overreliance on logic. You may be missing what your gut is trying to tell you.',
      love: 'Secrets or withheld feelings are creating distance in a relationship. Someone is holding back — possibly out of fear, shame, or self-protection — and the silence is becoming corrosive.',
      career: 'You may be ignoring your inner sense that something is off at work. The reversed High Priestess urges you not to rationalize away the unease you feel — investigate further.',
      money: 'Hidden financial information may be distorting your picture of the situation. Look more carefully at what isn\'t being disclosed, whether in contracts, partnerships, or your own spending patterns.',
      relationships: 'A lack of emotional transparency is undermining trust. The reversed High Priestess can indicate someone who is deeply private to the point of being unreachable, leaving others feeling shut out.',
      growth: 'You are disconnected from your inner life — too busy, too distracted, or too afraid to sit with yourself. This card asks you to prioritize solitude and honest self-reflection as a spiritual practice.'
    }
  },
  {
    id: 'major-3-empress',
    name: 'The Empress',
    arcana: 'major',
    suit: null,
    number: 3,
    symbol: '❋',
    uprightKeywords: ['abundance', 'fertility', 'nurturing', 'beauty', 'creativity'],
    reversedKeywords: ['dependence', 'creative block', 'neglect', 'smothering', 'stagnation'],
    upright: {
      general: 'The Empress radiates fertile abundance — a lush, generous energy that nurtures growth in every corner of life. She asks you to slow down and savor the beauty that surrounds you.',
      love: 'Romance is in full bloom. The Empress brings warmth, sensuality, and deep nurturing into your love life — a relationship may be deepening, or a new one may blossom with natural ease.',
      career: 'Creative projects flourish under the Empress. This is the perfect moment to bring ideas to life, collaborate generously, and build something beautiful and lasting in your professional world.',
      money: 'Abundance is flowing — or is about to. The Empress signals that financial seeds planted with care are now bearing fruit. Invest in things of lasting value rather than quick gains.',
      relationships: 'You are in a season of giving and receiving nurture freely. Your relationships feel warm and sustaining, and you have the emotional resources to show up fully for the people you love.',
      growth: 'The Empress calls you back to your body, to nature, and to the creative spark within you. Growth now comes through pleasure, beauty, and the patient tending of what matters most.'
    },
    reversed: {
      general: 'Reversed, the Empress points to an imbalance in giving and receiving. Either you are pouring yourself out for others with nothing in return, or you are neglecting your own need to create and be nurtured.',
      love: 'A relationship may feel smothering or unequal. One partner may be overgiving while the other takes without gratitude — or there is a creative and sensual drought that is leaving both parties unfulfilled.',
      career: 'Creative blocks are stalling progress. You may be censoring your own ideas before they have a chance to breathe, or working in an environment that stifles originality and authentic expression.',
      money: 'Financial abundance is being blocked by either scarcity thinking or overindulgence. Look at your relationship with material comfort — are you hoarding, overspending, or undervaluing your worth?',
      relationships: 'You may be smothering someone with your care, or conversely, feeling deeply uncared for. The reversed Empress asks you to examine whether love in this relationship is expressed or assumed.',
      growth: 'Self-neglect is the primary obstacle to your growth. The reversed Empress urges you to reclaim your physical wellbeing, creative practice, and sense of personal beauty before you can truly flourish.'
    }
  },
  {
    id: 'major-4-emperor',
    name: 'The Emperor',
    arcana: 'major',
    suit: null,
    number: 4,
    symbol: '⊞',
    uprightKeywords: ['authority', 'structure', 'stability', 'discipline', 'leadership'],
    reversedKeywords: ['rigidity', 'control', 'domination', 'inflexibility', 'tyranny'],
    upright: {
      general: 'The Emperor brings order to chaos — a firm, stabilizing energy that builds lasting structures through discipline and clear authority. His presence signals a time to lead and take command.',
      love: 'Stability and commitment are entering your love life. The Emperor asks for a relationship built on mutual respect, clear boundaries, and the security that comes from both partners showing up reliably.',
      career: 'You are being called to step into a leadership role with confidence. Structure your work, set clear goals, and don\'t be afraid to assert your authority — your competence commands respect.',
      money: 'Financial discipline is your strongest tool right now. Create a budget, stick to a plan, and approach money with the same precision and long-term thinking that the Emperor embodies.',
      relationships: 'You thrive in relationships with clear roles and expectations. The Emperor energy invites you to set firm, loving boundaries and build connections grounded in mutual accountability.',
      growth: 'Lasting growth is built on consistent discipline, not inspiration alone. The Emperor asks you to show up for your practices, your goals, and your responsibilities even when motivation fades.'
    },
    reversed: {
      general: 'Reversed, the Emperor becomes a tyrant — rigid, controlling, and unable to yield. Power is being misused, either by you or by an authority figure in your life, and it is stifling growth.',
      love: 'A controlling dynamic may be undermining the relationship. One partner may be dominating the other, using authority or emotional rigidity to suppress genuine expression and equality.',
      career: 'An inflexible boss or a culture of micromanagement is suffocating your work environment. Alternatively, you may be holding on too tightly to control, preventing your team from thriving.',
      money: 'Over-controlling attitudes toward money — obsessive budgeting, hoarding, or an unwillingness to invest — may be creating financial stagnation. Loosen the grip and allow flow.',
      relationships: 'Power imbalances are poisoning the well. The reversed Emperor can indicate a relationship where one person dominates through manipulation, rigid expectations, or withholding affection as punishment.',
      growth: 'You are confusing rigidity with strength. True growth requires the courage to bend, adapt, and surrender control — the reversed Emperor invites you to soften without losing your core stability.'
    }
  },
  {
    id: 'major-5-hierophant',
    name: 'The Hierophant',
    arcana: 'major',
    suit: null,
    number: 5,
    symbol: '✠',
    uprightKeywords: ['tradition', 'conformity', 'spirituality', 'education', 'guidance'],
    reversedKeywords: ['rebellion', 'nonconformity', 'dogma', 'restriction', 'challenge'],
    upright: {
      general: 'The Hierophant represents established wisdom, ritual, and the traditions that provide structure to our spiritual and social lives. There is value in learning from what has been built before you.',
      love: 'A relationship may be moving toward a traditional commitment — marriage, engagement, or a formal deepening of partnership. The Hierophant blesses unions that honor shared values.',
      career: 'Mentorship, formal education, or following established protocols will serve you well now. Look to experienced guides in your field and honor the knowledge systems already in place.',
      money: 'Traditional financial approaches — saving consistently, investing conservatively, following proven strategies — are favored over unconventional schemes. Wisdom lies in time-tested methods.',
      relationships: 'Shared beliefs and values are the foundation of your strongest relationships. The Hierophant highlights the importance of finding common ground in faith, family traditions, or life philosophy.',
      growth: 'Spiritual growth at this time comes through practice, ritual, and the guidance of a teacher or tradition. You don\'t need to reinvent the wheel — immerse yourself in a lineage of wisdom.'
    },
    reversed: {
      general: 'Reversed, the Hierophant signals a break from convention — either a necessary rebellion against stifling dogma, or a reckless rejection of wisdom you haven\'t yet fully absorbed.',
      love: 'You may be challenging traditional relationship models or refusing to commit in the ways others expect. This can be liberating, but ensure that rebellion isn\'t masking fear of real intimacy.',
      career: 'You are chafing against institutional rules and may be ready to forge your own path. The reversed Hierophant supports unconventional approaches as long as they are driven by vision, not just defiance.',
      money: 'You may be questioning conventional financial advice or finding that traditional structures no longer serve your situation. Explore alternative approaches with careful research rather than impulsive rejection.',
      relationships: 'Dogma or rigid expectations about how relationships "should" look may be causing friction. The reversed Hierophant invites a more individualized, authentic approach to connection.',
      growth: 'Your growth now comes from questioning the beliefs you inherited rather than accepting them wholesale. Examine your assumptions about spirituality, morality, and belonging — forge your own understanding.'
    }
  },
  {
    id: 'major-6-lovers',
    name: 'The Lovers',
    arcana: 'major',
    suit: null,
    number: 6,
    symbol: '⚭',
    uprightKeywords: ['love', 'union', 'alignment', 'choice', 'harmony'],
    reversedKeywords: ['disharmony', 'imbalance', 'misalignment', 'indecision', 'conflict'],
    upright: {
      general: 'The Lovers speak of deep alignment — between two people, between values and actions, or between the different parts of yourself. A meaningful choice is approaching that will define your path.',
      love: 'This is the quintessential love card — signaling a profound romantic union, a soulmate connection, or a relationship defined by mutual respect, desire, and genuine choice. Love is real here.',
      career: 'A significant career choice is before you — possibly between two paths that each represent a core value. Choose the one that aligns most deeply with who you truly are, not just what pays well.',
      money: 'Financial decisions are tied to your values right now. The Lovers asks you to consider not just return on investment but whether how you earn and spend money reflects what you truly care about.',
      relationships: 'Your most fulfilling relationships right now are those built on authentic mutual choice — where both parties consciously, freely choose each other. Let this principle guide who you invest in.',
      growth: 'The deepest growth comes from integrating the opposing forces within yourself — logic and emotion, freedom and commitment, self and other. The Lovers invites this sacred inner marriage.'
    },
    reversed: {
      general: 'Reversed, the Lovers suggest disharmony — a relationship or decision that is out of alignment with your deeper values. Choices made from fear or obligation rather than love will not sustain.',
      love: 'A relationship may be feeling unbalanced or misaligned. There could be communication breakdowns, incompatible values, or one partner not fully choosing the other with their whole heart.',
      career: 'You may be staying in a career path that no longer resonates with your true calling. The reversed Lovers asks: are you here because you truly want to be, or because leaving feels too frightening?',
      money: 'Inner conflict about money — between spending and saving, security and freedom — is leading to poor decisions. Clarify your financial values before making any significant moves.',
      relationships: 'Imbalance and misalignment are eroding the quality of your connections. Either you or another person is not showing up authentically, and the dissonance is becoming impossible to ignore.',
      growth: 'You are in conflict with yourself — torn between what you want and what you think you should want. The reversed Lovers calls you to examine the internal disharmony that is spilling into your outer world.'
    }
  },
  {
    id: 'major-7-chariot',
    name: 'The Chariot',
    arcana: 'major',
    suit: null,
    number: 7,
    symbol: '⬡',
    uprightKeywords: ['determination', 'control', 'victory', 'willpower', 'direction'],
    reversedKeywords: ['aggression', 'lack of control', 'defeat', 'scattered energy', 'opposition'],
    upright: {
      general: 'The Chariot represents victory through discipline and focused will. You are harnessing opposing forces and driving them toward a single goal — and the momentum is fully on your side.',
      love: 'You are taking decisive action in your love life — pursuing what you want with clarity and confidence. If you desire a particular outcome, the Chariot says: go after it with intention.',
      career: 'You are overcoming obstacles and driving hard toward professional success. Your willpower and competitive drive are your greatest assets — stay focused and don\'t let distractions derail you.',
      money: 'Financial goals are within reach if you stay disciplined and keep moving forward. The Chariot rewards sustained effort — maintain your strategy and don\'t abandon it when the path gets bumpy.',
      relationships: 'You are the driving force in your relationships right now — take charge of creating the dynamic you want. Leadership in love doesn\'t mean control; it means clear, loving direction.',
      growth: 'True mastery comes from holding tension without being undone by it. The Chariot teaches you to integrate your contradictions — heart and mind, fire and water — into a single, purposeful drive.'
    },
    reversed: {
      general: 'Reversed, the Chariot signals a loss of control — direction scattered, momentum stalled, or aggression mistaken for strength. Something is pulling you off course and it needs to be addressed.',
      love: 'Power struggles or an inability to steer a relationship in a healthy direction may be causing chaos. The reversed Chariot can indicate forcefulness or control issues damaging a romantic connection.',
      career: 'You may be driving in too many directions at once, or pursuing a goal so aggressively that you\'re alienating allies. Step back, reassess your strategy, and let go of battles that aren\'t yours to fight.',
      money: 'Lack of financial discipline is derailing your plans. The reversed Chariot can indicate impulse purchases, scattered investments, or a sense that money is slipping through your fingers no matter what.',
      relationships: 'Control dynamics are causing harm. One person may be driving so hard in one direction that the other can\'t keep up, or unresolved conflicts are preventing the relationship from moving forward.',
      growth: 'You are expending energy without direction — busy but not progressing. The reversed Chariot asks you to pause, identify what you are truly fighting for, and realign before pushing forward again.'
    }
  },
  {
    id: 'major-8-strength',
    name: 'Strength',
    arcana: 'major',
    suit: null,
    number: 8,
    symbol: '∞',
    uprightKeywords: ['courage', 'patience', 'compassion', 'inner strength', 'resilience'],
    reversedKeywords: ['self-doubt', 'weakness', 'cowardice', 'insecurity', 'raw impulse'],
    upright: {
      general: 'Strength is not brute force — it is the quiet, unwavering courage to meet the beast within and tame it with love. You have more inner reserves than you know, and they are rising to meet this moment.',
      love: 'Love requires the strength to be vulnerable, to remain open even after being hurt. This card signals that your relationship has the resilience to survive difficulty — lean into compassionate honesty.',
      career: 'You are handling a challenging work situation with more grace than you realize. Your ability to remain calm under pressure, to lead without dominating, is your most powerful professional asset.',
      money: 'Financial challenges are being met with steady resolve. You don\'t panic when things get tight — you find creative solutions and trust in your ability to handle whatever comes your way.',
      relationships: 'Your most meaningful relationships are built on emotional courage — the willingness to stay present through difficulty, to hold space for others\' shadows without being consumed by them.',
      growth: 'The deepest strength is forged in the moments when you choose compassion over reactivity. Growth right now means facing what frightens you with an open, gentle heart rather than armored defenses.'
    },
    reversed: {
      general: 'Reversed, Strength signals a crisis of confidence — self-doubt rising, emotional reserves running low, or raw instincts overriding your better judgment in a way you may regret.',
      love: 'Insecurity is making it hard to show up fully in love. You may be shrinking yourself to avoid conflict, or swinging to the opposite extreme — letting jealousy or fear drive your behavior.',
      career: 'You may be doubting your ability to handle the demands being placed on you. The reversed Strength card asks: are these doubts based in reality, or are they old stories getting in the way of your power?',
      money: 'Fear-driven financial decisions — hoarding, avoiding, or making impulsive moves out of anxiety — are undermining your stability. Build your confidence by taking small, informed steps forward.',
      relationships: 'You may be allowing others to walk over your boundaries because confrontation feels too frightening. The reversed Strength card urges you to find the courage to advocate for yourself with love.',
      growth: 'Your greatest obstacle right now is the inner critic that insists you aren\'t enough. The reversed Strength card asks you to meet this voice with the same compassion you\'d offer a frightened animal.'
    }
  },
  {
    id: 'major-9-hermit',
    name: 'The Hermit',
    arcana: 'major',
    suit: null,
    number: 9,
    symbol: '◈',
    uprightKeywords: ['solitude', 'introspection', 'guidance', 'wisdom', 'inner search'],
    reversedKeywords: ['isolation', 'loneliness', 'withdrawal', 'exile', 'lost'],
    upright: {
      general: 'The Hermit has climbed the mountain not to escape the world, but to illuminate the path for others. This is a time for deep inner work — solitude chosen with purpose yields profound wisdom.',
      love: 'A period of solitary reflection is necessary before you can truly connect with another. The Hermit asks you to know yourself more deeply first — what do you truly want from love and partnership?',
      career: 'Step back from the busyness of professional life to assess where you are truly headed. The Hermit brings wisdom through reflection — a retreat, a sabbatical, or simply a quiet afternoon of thinking can shift everything.',
      money: 'Financial wisdom comes through careful, independent analysis right now rather than following the crowd. Trust your own research over popular opinion and be willing to take the slower, surer road.',
      relationships: 'You are in a season of needing more space than usual, and the people who love you will understand. Use this solitude to understand your own patterns in relationship before reaching out again.',
      growth: 'The Hermit is the archetype of the inner teacher. Your greatest growth right now comes from turning the lamp of awareness inward — through meditation, journaling, therapy, or time alone in nature.'
    },
    reversed: {
      general: 'Reversed, the Hermit signals a withdrawal that has gone too far — isolation that feeds loneliness rather than wisdom, or a refusal to emerge and share the light you\'ve gathered.',
      love: 'You may be so withdrawn that real intimacy has become impossible. The reversed Hermit can indicate a fear of being truly known — hiding behind independence to avoid the vulnerability of love.',
      career: 'Excessive isolation at work — refusing collaboration, hoarding knowledge, or retreating from professional community — is limiting your growth and impact. Your wisdom needs an audience.',
      money: 'You may be too isolated from good financial advice and perspective, making decisions in a vacuum that leave you unnecessarily exposed to risk. Seek trusted input from those with broader experience.',
      relationships: 'You may be pushing people away out of a fear of being a burden, or using emotional distance as a form of self-protection that ultimately leaves you more alone than you want to be.',
      growth: 'The reversed Hermit warns against self-imposed exile masquerading as spiritual practice. True wisdom eventually returns to the world — if your solitude has no end in sight, examine what you are avoiding.'
    }
  },
  {
    id: 'major-10-wheel',
    name: 'Wheel of Fortune',
    arcana: 'major',
    suit: null,
    number: 10,
    symbol: '⊛',
    uprightKeywords: ['cycles', 'luck', 'fate', 'turning point', 'destiny'],
    reversedKeywords: ['bad luck', 'resistance', 'delays', 'setbacks', 'stuck'],
    upright: {
      general: 'The Wheel of Fortune announces a turning point — the cycles of life are spinning, and change is arriving whether you prepared for it or not. Align with the flow rather than fighting it.',
      love: 'A fated encounter or a significant shift in your romantic life is approaching. The wheel is turning in love\'s favor — trust that what is meant for you is moving closer with each passing day.',
      career: 'A lucky break or an unexpected opportunity is on its way. The Wheel of Fortune rewards those who stay ready — be open to sudden shifts in direction that may seem chaotic but are ultimately beneficial.',
      money: 'Financial luck is turning in your direction. A windfall, a surprise investment return, or an unexpected income source may appear. The key is to be open and ready when opportunity knocks.',
      relationships: 'A relationship is at a turning point — deepening, shifting, or transforming into something entirely new. Trust the process even if the change feels disorienting, as cycles always serve a larger purpose.',
      growth: 'Growth now comes from embracing impermanence. The Wheel reminds you that nothing stays the same — and this is a gift. Let go of what is ending and welcome what is arriving with open hands.'
    },
    reversed: {
      general: 'Reversed, the Wheel signals stuck energy — delays, setbacks, or a refusal to accept that change is necessary. You may be clinging to what was rather than allowing the cycle to turn.',
      love: 'Recurring patterns in love are demanding your attention. The reversed Wheel can indicate that you keep attracting the same type of relationship — examine the cycle and choose differently.',
      career: 'Professional setbacks or delays may feel like bad luck, but they are often course corrections. The reversed Wheel asks: where are you resisting necessary change in your career trajectory?',
      money: 'Financial setbacks or unexpected losses are possible. The reversed Wheel asks you to examine whether you are fighting against natural financial cycles rather than working intelligently with them.',
      relationships: 'A relationship may be stuck in a repetitive, unhealthy loop. The reversed Wheel invites you to break the pattern consciously — the cycle will not change on its own unless someone intervenes.',
      growth: 'You are resisting the inevitable turning of the wheel, holding tightly to circumstances that have already changed. True growth here requires releasing control and surrendering to the larger rhythm of life.'
    }
  },
  {
    id: 'major-11-justice',
    name: 'Justice',
    arcana: 'major',
    suit: null,
    number: 11,
    symbol: '⚖',
    uprightKeywords: ['fairness', 'truth', 'cause and effect', 'law', 'balance'],
    reversedKeywords: ['injustice', 'dishonesty', 'imbalance', 'avoidance', 'bias'],
    upright: {
      general: 'Justice holds the scales with calm certainty — every action has a consequence, and the truth will be revealed in time. This is a moment of reckoning, but also of clarity and fair resolution.',
      love: 'Balance and fairness are essential in your love life right now. Justice asks whether you are giving as much as you receive, and whether the relationship operates from truth rather than illusion.',
      career: 'A fair outcome is approaching in a professional matter — a contract, a promotion decision, or a dispute will be resolved with integrity. Make sure your own conduct has been beyond reproach.',
      money: 'Financial matters will resolve fairly if you have been honest in your dealings. Justice rewards ethical financial behavior and signals that any outstanding debts or obligations are being brought to account.',
      relationships: 'Honesty and accountability are the foundations of your strongest connections right now. Justice asks you and those you love to show up with integrity — to say what you mean and mean what you say.',
      growth: 'Growth requires honest self-accounting. Justice invites you to examine your actions and their consequences without flinching — take full responsibility for your choices and learn from the outcomes.'
    },
    reversed: {
      general: 'Reversed, Justice signals that fairness is being denied — corruption, bias, or a deliberate avoidance of accountability is distorting the truth of a situation. Examine where dishonesty is at play.',
      love: 'An imbalance in a relationship is going unacknowledged. Someone may be refusing to take responsibility for harm done, or the scales of giving and receiving are so uneven the relationship is suffering.',
      career: 'You may be facing an unfair outcome at work — a biased decision, a case where the rules don\'t apply equally. Document everything and seek legal or institutional support if necessary.',
      money: 'Financial injustice or dishonest dealings are indicated. Be wary of contracts with fine print designed to disadvantage you, and ensure that your own financial practices are completely transparent.',
      relationships: 'Avoidance of difficult truths is eroding trust. The reversed Justice card asks you to stop tolerating dishonesty — both from others and from yourself — in the name of keeping the peace.',
      growth: 'You are avoiding accountability for something significant in your own life. The reversed Justice card asks you to stop deflecting and instead take an honest, unflinching look at your own contribution to a difficult situation.'
    }
  },
  {
    id: 'major-12-hanged-man',
    name: 'The Hanged Man',
    arcana: 'major',
    suit: null,
    number: 12,
    symbol: '⊗',
    uprightKeywords: ['pause', 'surrender', 'new perspective', 'suspension', 'letting go'],
    reversedKeywords: ['stalling', 'resistance', 'martyrdom', 'avoidance', 'needless sacrifice'],
    upright: {
      general: 'The Hanged Man suspends himself willingly, seeing the world from a completely new angle. This is a time to pause, surrender, and allow a radical shift in perspective to emerge through stillness.',
      love: 'Progress in love requires a paradoxical pause. Stop trying to force things to move and instead surrender into the waiting — what you need to understand about this relationship can only be seen from upside-down.',
      career: 'A frustrating delay in your career is actually a period of hidden preparation. The Hanged Man asks you to stop struggling against the pause and instead use this time to gain new insight and clarity.',
      money: 'A financial decision is best postponed right now. The Hanged Man counsels that the answer will be clearer after a period of deliberate waiting — resist the pressure to act before you truly understand the landscape.',
      relationships: 'You may need to let go of how you expect a relationship to unfold. The Hanged Man invites a radical shift in how you see someone — what if you released your preconceptions and saw them completely fresh?',
      growth: 'The deepest growth arrives not through action but through surrender. The Hanged Man asks you to release your grip on outcomes, hang in the discomfort of not-knowing, and trust what emerges.'
    },
    reversed: {
      general: 'Reversed, the Hanged Man signals a refusal to surrender — fighting against a necessary pause, or making futile sacrifices that serve ego rather than genuine transformation.',
      love: 'You may be martyring yourself in a relationship — sacrificing your needs in ways that create resentment rather than genuine love. The reversed Hanged Man asks: what are you getting from this sacrifice?',
      career: 'Stalling and indecision are masquerading as careful consideration. The reversed Hanged Man asks you to be honest with yourself: are you waiting for clarity, or are you simply afraid to make the next move?',
      money: 'Needless financial martyrdom — denying yourself reasonable comforts, sacrificing security for others who don\'t reciprocate — is indicated. Examine whether your financial sacrifices are truly necessary.',
      relationships: 'You may be holding onto a victim identity in a relationship — using suffering as a way to avoid agency. The reversed Hanged Man asks you to step down from the cross and choose differently.',
      growth: 'You are resisting the very surrender that would free you. The reversed Hanged Man asks: what are you so afraid to lose that you\'d rather stay stuck than let go?'
    }
  },
  {
    id: 'major-13-death',
    name: 'Death',
    arcana: 'major',
    suit: null,
    number: 13,
    symbol: '✕',
    uprightKeywords: ['transformation', 'endings', 'transition', 'change', 'release'],
    reversedKeywords: ['resistance', 'stagnation', 'fear of change', 'clinging', 'decay'],
    upright: {
      general: 'Death is the great transformer — not an ending, but a radical metamorphosis. Something must die so that something new can be born, and the only way through this threshold is full acceptance.',
      love: 'A significant transformation in your love life is underway. A relationship may be ending, or it may be shedding its old form to emerge as something entirely different — trust the process of renewal.',
      career: 'A career chapter is closing, making space for a completely new professional identity to emerge. Release attachment to what was and allow yourself to be reborn into the next version of your work.',
      money: 'A financial era is ending. Old patterns around money — spending habits, income sources, beliefs about wealth — are dying away, making room for a completely restructured financial life to arise.',
      relationships: 'A relationship is transforming at its deepest level. This may feel like loss, but Death in the Tarot signals that what truly belongs in your life will survive — and emerge stronger for having been tested.',
      growth: 'The most profound growth often feels like grief. Death asks you to let go of the identity, belief, or story that no longer serves you — your future self cannot be born until the old self is released.'
    },
    reversed: {
      general: 'Reversed, Death signals a resistance to necessary change — clinging to what has already ended, fearing transformation, or allowing decay to continue rather than releasing what must go.',
      love: 'You are holding onto a relationship or romantic ideal that has already run its course. The reversed Death card asks you to grieve what has ended rather than prolonging its dying unnecessarily.',
      career: 'Fear of change is keeping you trapped in a career that no longer fits who you are. The reversed Death card asks you to be honest about what is already over and take the courageous step of letting it go.',
      money: 'Old, dysfunctional financial patterns are refusing to die because change feels too threatening. The reversed Death card asks you to acknowledge what isn\'t working and finally commit to genuine restructuring.',
      relationships: 'Stagnation in a relationship is the result of refusing to allow the natural evolution of connection. Something has to change — and the cost of resisting is a slow, painful form of relational decay.',
      growth: 'You are clinging to an old version of yourself long past its expiration date. The reversed Death card asks: what part of your identity are you refusing to let die, and why does its dissolution feel so terrifying?'
    }
  },
  {
    id: 'major-14-temperance',
    name: 'Temperance',
    arcana: 'major',
    suit: null,
    number: 14,
    symbol: '≈',
    uprightKeywords: ['balance', 'patience', 'moderation', 'alchemy', 'flow'],
    reversedKeywords: ['imbalance', 'excess', 'lack of harmony', 'discord', 'impatience'],
    upright: {
      general: 'Temperance is the art of sacred blending — finding perfect balance between opposing forces, mixing your inner fire and water to create something luminous and whole. Divine timing is at work here.',
      love: 'A harmonious, flowing love connection is developing. Temperance brings the energy of two people complementing each other beautifully — different qualities combining to create something greater than the sum of its parts.',
      career: 'The key to professional success right now is integration — bringing your creativity and logic, your big visions and careful plans, into fluid collaboration. Patience and steady progress will outperform bursts of effort.',
      money: 'A balanced, moderate approach to finances will yield the most sustainable results. Temperance counsels neither extreme frugality nor lavish spending — find the golden mean and stay there.',
      relationships: 'Your relationships thrive when you find the middle path between giving and receiving, speaking and listening, needing and offering. Temperance invites conscious calibration in all your connections.',
      growth: 'Your growth is alchemical right now — you are transforming raw experience into wisdom by holding seemingly opposing truths simultaneously. This patient, integrative process is the highest form of personal development.'
    },
    reversed: {
      general: 'Reversed, Temperance signals imbalance — excess or deficiency in some important area of life, an inability to find the middle path, or a loss of the easy flow that makes life feel meaningful.',
      love: 'A relationship is out of equilibrium — one person is giving too much or asking too much, and the natural flow between you has been disrupted. Conscious recalibration is needed before resentment sets in.',
      career: 'Impatience is undermining the quality of your work. You may be rushing toward results, skipping necessary steps, or burning out from inconsistent effort followed by inaction. Find a sustainable rhythm.',
      money: 'Excess is the challenge here — either overspending or extreme deprivation, both extremes creating instability. Find the middle path between indulgence and austerity and commit to it consistently.',
      relationships: 'Discord has replaced harmony in a key relationship. The reversed Temperance asks where the balance broke down — and whether both parties are willing to do the patient work of restoring it.',
      growth: 'You are trying to force transformation rather than allowing it to emerge naturally. The reversed Temperance card reminds you that alchemy cannot be rushed — surrender to the process and trust divine timing.'
    }
  },
  {
    id: 'major-15-devil',
    name: 'The Devil',
    arcana: 'major',
    suit: null,
    number: 15,
    symbol: '⛋',
    uprightKeywords: ['bondage', 'addiction', 'materialism', 'shadow', 'restriction'],
    reversedKeywords: ['release', 'reclaiming power', 'detachment', 'breaking free', 'awareness'],
    upright: {
      general: 'The Devil reveals the chains we have forged for ourselves — addictions, compulsions, limiting beliefs, and shadow aspects that hold us captive. The chains are loosely fastened; the question is why you choose to stay.',
      love: 'A toxic or addictive dynamic may be masquerading as passion. The Devil in love can indicate obsession, co-dependency, or staying in a relationship more out of fear than genuine desire.',
      career: 'You may be trapped in a work situation that no longer serves you — a soul-crushing job, an unhealthy relationship with achievement, or a career built on someone else\'s values rather than your own.',
      money: 'An unhealthy relationship with money — greed, obsession with material status, or financial codependency — is keeping you spiritually impoverished even if materially comfortable.',
      relationships: 'Shadow dynamics are operating beneath the surface of a relationship. The Devil asks you to look honestly at the unhealthy patterns — jealousy, control, manipulation — that both parties are participating in.',
      growth: 'Confronting your shadow is the essential work of this moment. The Devil asks you to look at what you most want to deny about yourself — your addictions, your fears, your dark desires — and choose consciousness.'
    },
    reversed: {
      general: 'Reversed, the Devil signals liberation — a chain is being broken, a shadow is being brought to light, and the power you surrendered to fear or addiction is being reclaimed.',
      love: 'You are breaking free from a toxic romantic pattern. The reversed Devil brings the moment of clarity where you see the dynamic for what it truly is and find the strength to choose differently.',
      career: 'You are releasing a work situation that had you chained. Whether you\'re quitting a draining job, leaving a toxic workplace culture, or simply changing your relationship to ambition, liberation is here.',
      money: 'You are releasing an unhealthy grip on material security. The reversed Devil can indicate breaking free from greed, releasing a scarcity mindset, or detaching from the belief that your worth is tied to your net worth.',
      relationships: 'A shadow pattern in a relationship is finally being named and addressed. The reversed Devil invites radical honesty about what has been happening beneath the surface — this awareness is the first step to healing.',
      growth: 'Liberation comes from naming your shadows, not battling them. The reversed Devil signals a moment of profound self-awareness — you can now see the patterns that were controlling you, and this seeing itself is freedom.'
    }
  },
  {
    id: 'major-16-tower',
    name: 'The Tower',
    arcana: 'major',
    suit: null,
    number: 16,
    symbol: '⚡',
    uprightKeywords: ['sudden change', 'upheaval', 'revelation', 'chaos', 'awakening'],
    reversedKeywords: ['avoidance', 'delayed collapse', 'fear of change', 'inner upheaval', 'resistance'],
    upright: {
      general: 'The Tower strikes without warning — but what it destroys was never truly stable. This sudden upheaval is a mercy, clearing away false structures and forcing a confrontation with truth that could not be postponed.',
      love: 'A sudden revelation is reshaping your understanding of a relationship. What felt certain may be revealed as illusion — and while this is painful, the truth that emerges is the only foundation worth building on.',
      career: 'A shocking career disruption — a sudden job loss, an unexpected restructuring, or a truth revealed — is forcing a complete reassessment. The Tower clears the way for something far more authentic to rise.',
      money: 'Financial upheaval is likely — a sudden loss, an unexpected expense, or the collapse of what you thought was a stable foundation. This is a jarring reset that ultimately leads to more honest financial management.',
      relationships: 'A relationship is being struck by lightning — a revelation, a confrontation, or an event that changes everything. The structures that weren\'t built on honesty cannot survive this moment.',
      growth: 'The Tower is a forced awakening — everything that was not truly you, not truly yours, is being stripped away. What remains after the lightning strike is the bedrock of your authentic self.'
    },
    reversed: {
      general: 'Reversed, the Tower signals a collapse that is being delayed — either through denial, avoidance, or a deliberate choice to stay in crumbling circumstances rather than face the necessary destruction.',
      love: 'You are staying in a relationship past its natural end point, propping up structures that are already fallen. The reversed Tower asks how long you can sustain the effort before the inevitable reckoning.',
      career: 'An impending professional crisis is being suppressed or ignored. The reversed Tower suggests that the longer you avoid addressing what isn\'t working, the more catastrophic the eventual reckoning will be.',
      money: 'Financial problems that should be confronted are being swept under the rug. The reversed Tower warns that avoidance compounds crisis — face the numbers honestly before the situation becomes unmanageable.',
      relationships: 'A truth is building pressure beneath the surface of a relationship, and the delay in addressing it is making things worse. The reversed Tower asks you to initiate the difficult conversation before it initiates itself.',
      growth: 'Internal upheaval is happening beneath the surface even if your outer life appears stable. The reversed Tower can indicate an inner collapse of beliefs or identity — sit with this process rather than suppressing it.'
    }
  },
  {
    id: 'major-17-star',
    name: 'The Star',
    arcana: 'major',
    suit: null,
    number: 17,
    symbol: '★',
    uprightKeywords: ['hope', 'renewal', 'inspiration', 'healing', 'faith'],
    reversedKeywords: ['hopelessness', 'despair', 'disconnection', 'lack of faith', 'insecurity'],
    upright: {
      general: 'After the storm comes the Star — a soft, healing light that restores hope after upheaval. This is a moment of deep renewal, where faith in the future is not naive but hard-won and luminous.',
      love: 'The Star brings healing to your love life — past wounds are mending, and a new sense of hope and possibility is emerging. A relationship can be renewed from a place of authentic vulnerability and trust.',
      career: 'Inspiration is returning after a period of darkness or doubt. The Star signals that your professional path is illuminated by a sense of purpose — follow the light of what genuinely excites and motivates you.',
      money: 'Financial healing is underway. After a period of struggle or stress, the Star brings a quiet confidence that things are stabilizing — and a renewed capacity to envision and work toward abundance.',
      relationships: 'A relationship is being healed and restored. Old wounds between you and someone important are finally being tended to, and a new level of trust and intimacy is becoming possible.',
      growth: 'The Star represents the soul\'s capacity for renewal no matter what has come before. Your growth right now is guided by a quiet, inner light — trust it, follow it, and let it lead you back to yourself.'
    },
    reversed: {
      general: 'Reversed, the Star signals a loss of hope — despair, disconnection from inner light, or a feeling of being fundamentally broken that prevents you from receiving the healing that is actually available.',
      love: 'Cynicism about love may be blocking genuine connection. The reversed Star asks: are you refusing to hope because hope feels too dangerous after past heartbreak? Let yourself risk opening again.',
      career: 'You may have lost faith in your professional path or your own gifts. The reversed Star signals a need to reconnect with what originally inspired you — the spark is still there, though buried.',
      money: 'A pessimistic or defeated attitude toward finances is creating a self-fulfilling prophecy. The reversed Star asks you to examine the stories you tell yourself about money and your ability to attract it.',
      relationships: 'Disillusionment has set in — you may feel that genuine connection is impossible or that the people in your life can\'t truly see you. The reversed Star asks you to open to the possibility of being known.',
      growth: 'You have disconnected from your own inner light — the part of you that knows you are inherently worthy and capable of healing. The reversed Star asks you to tenderly seek this spark and tend it back to life.'
    }
  },
  {
    id: 'major-18-moon',
    name: 'The Moon',
    arcana: 'major',
    suit: null,
    number: 18,
    symbol: '◑',
    uprightKeywords: ['illusion', 'fear', 'subconscious', 'uncertainty', 'dreams'],
    reversedKeywords: ['confusion', 'repressed fear', 'clarity emerging', 'deception revealed', 'anxiety'],
    upright: {
      general: 'The Moon casts everything in soft, deceptive light — things are not as they appear, and the path forward winds through uncertainty and shadow. This is a time to trust your intuition over your logic.',
      love: 'Things in your love life are not entirely what they seem. The Moon can indicate illusion, projection, or a relationship operating on unconscious dynamics that haven\'t been brought into the open yet.',
      career: 'Uncertainty clouds your professional path right now. You may not have the full picture of a situation at work — gather more information and resist the urge to make permanent decisions based on incomplete data.',
      money: 'Be cautious about financial decisions made during this lunar period of confusion. Hidden information, deceptive offers, or your own irrational fears about money may be distorting your perception.',
      relationships: 'Unconscious patterns and unspoken fears are driving your relationship dynamics more than you realize. The Moon asks you to bring your shadow material into awareness before it creates a crisis.',
      growth: 'The Moon invites you into the realm of the unconscious — dreams, instincts, and the fears you keep in the dark. Growth now means diving into your depths with courage and bringing what you find into the light.'
    },
    reversed: {
      general: 'Reversed, the Moon signals that hidden truths are beginning to emerge — confusion is lifting, illusions are dissolving, and what was kept in the dark is finally coming to light.',
      love: 'A deception or illusion in a relationship is being revealed. The reversed Moon can indicate that you are finally seeing a situation clearly, or that a secret you or another has been keeping is coming to light.',
      career: 'Clarity is emerging in a previously murky professional situation. Information that was withheld is being revealed, and the confusion that made decision-making difficult is beginning to lift.',
      money: 'Hidden financial information is surfacing. Whether it\'s a fraud being uncovered, a misunderstanding being clarified, or your own irrational money fears being named, the truth is emerging.',
      relationships: 'The veils of illusion are being pulled back in a key relationship. The reversed Moon can indicate a period of difficult but necessary clarity where you see yourself and others more accurately.',
      growth: 'The reversed Moon marks the moment of emerging from a long period of inner confusion. Repressed fears and unconscious patterns are rising to consciousness — meet them with compassion rather than alarm.'
    }
  },
  {
    id: 'major-19-sun',
    name: 'The Sun',
    arcana: 'major',
    suit: null,
    number: 19,
    symbol: '☀',
    uprightKeywords: ['joy', 'success', 'vitality', 'abundance', 'positivity'],
    reversedKeywords: ['inner child wounds', 'excessive optimism', 'blocked joy', 'ego', 'dimmed light'],
    upright: {
      general: 'The Sun blazes with unambiguous joy and life-giving warmth — success, vitality, and genuine happiness are yours right now. Step into this abundant light without apology or modesty.',
      love: 'Joy and warmth are flooding your love life. The Sun signals a relationship filled with happiness, playfulness, and a genuine delight in each other — let yourself be fully happy in love.',
      career: 'Professional success is shining brightly. Recognition, achievement, and the satisfaction of work well done are indicated — your gifts are being seen and celebrated by those who matter.',
      money: 'Financial abundance and optimism are strongly favored. The Sun brings a period of prosperity and the confidence to pursue financial growth without the shadow of fear or scarcity.',
      relationships: 'Your relationships are lit from within — full of warmth, generosity, and the kind of easy joy that makes being alive feel like a gift. Share your light freely and let others share theirs with you.',
      growth: 'The Sun represents the fullest expression of your authentic self. Growth now means stepping fully into your light — no more hiding, no more dimming yourself. You are allowed to shine.'
    },
    reversed: {
      general: 'Reversed, the Sun does not go dark — but its light is temporarily blocked. Something is preventing you from accessing or expressing your full vitality, whether that is inner doubt, ego, or unhealed childhood wounds.',
      love: 'Joy in a relationship is being blocked — either by external circumstances, or by an inner belief that you don\'t deserve happiness in love. The reversed Sun asks what is keeping you from allowing real joy.',
      career: 'Your natural confidence and enthusiasm at work may be dampened by self-doubt, or inflated into arrogance that alienates colleagues. Recalibrate your relationship to your own professional light.',
      money: 'Excessive optimism about finances may be leading to unrealistic plans. The reversed Sun cautions against overconfidence — celebrate your abundance, but also maintain realistic expectations and sound planning.',
      relationships: 'An inner child wound may be coloring how you show up in relationships — either seeking constant validation, or sabotaging joy when it arrives because it doesn\'t feel safe. Tend to this wounded part gently.',
      growth: 'You are dimming your own light out of fear of how it will be received. The reversed Sun asks you to examine the beliefs that tell you your joy, success, or authentic radiance is somehow inappropriate or dangerous.'
    }
  },
  {
    id: 'major-20-judgement',
    name: 'Judgement',
    arcana: 'major',
    suit: null,
    number: 20,
    symbol: '♦',
    uprightKeywords: ['rebirth', 'absolution', 'calling', 'reflection', 'awakening'],
    reversedKeywords: ['self-doubt', 'ignoring the call', 'self-judgment', 'stagnation', 'denial'],
    upright: {
      general: 'Judgement sounds the trumpet of awakening — a profound call to rise, to shed the weight of the past, and to answer the deeper calling that has been gathering strength within you. Absolution is real.',
      love: 'A relationship is undergoing a profound resurrection — past wounds are being healed, and a decision to consciously choose this partnership with full awareness is being made. This is renewal, not recycling.',
      career: 'A powerful vocational calling is announcing itself. Judgement asks you to heed the deeper purpose behind your professional life and make a bold declaration of commitment to your true work in the world.',
      money: 'A financial reckoning is occurring — but it is redemptive rather than punishing. You are being called to account for past financial choices and given the clarity to restructure your relationship with money completely.',
      relationships: 'A moment of profound forgiveness and renewal is available in a key relationship. The past can be put down — if both parties are willing to do the honest work of releasing what was and choosing what could be.',
      growth: 'This is one of the great awakening cards — a moment where everything you have experienced crystallizes into a clear call to action. Answer the summons with courage, and step into the fullest version of yourself.'
    },
    reversed: {
      general: 'Reversed, Judgement signals a failure to heed the call — self-doubt, self-judgment, or a deliberate avoidance of the reckoning that would set you free. The trumpet is sounding; are you listening?',
      love: 'You may be judging yourself or a partner too harshly, making genuine forgiveness and renewal impossible. The reversed Judgement asks you to release the verdict and open to the possibility of something genuinely new.',
      career: 'You are ignoring a clear vocational calling out of fear of what it would require of you. The reversed Judgement asks: what would you do if you were not afraid, and why are you choosing not to do it?',
      money: 'A pattern of harsh self-judgment about past financial mistakes is preventing you from moving forward. The reversed Judgement asks for self-forgiveness — you cannot build something new while flogging yourself for what was.',
      relationships: 'You are holding yourself or others to an impossible standard of perfection that prevents genuine healing and reconnection. The reversed Judgement asks you to practice the forgiveness you know is needed.',
      growth: 'You are refusing your own awakening — not because you can\'t hear the call, but because answering it would require you to change in ways that feel too large. The reversed Judgement asks you to take the first small step.'
    }
  },
  {
    id: 'major-21-world',
    name: 'The World',
    arcana: 'major',
    suit: null,
    number: 21,
    symbol: '⊕',
    uprightKeywords: ['completion', 'integration', 'wholeness', 'achievement', 'fulfillment'],
    reversedKeywords: ['incompletion', 'delay', 'shortcuts', 'stagnation', 'unfinished'],
    upright: {
      general: 'The World is the great completion — all the threads of the journey woven into a luminous whole. You have arrived at a place of deep integration and wholeness, and it is time to celebrate what you have accomplished.',
      love: 'A relationship has reached a beautiful state of completion and wholeness — or a deeply fulfilling new chapter of shared life is beginning. This is love at its most mature and whole.',
      career: 'A major professional achievement is being completed. The World marks the successful culmination of a long project or career phase — take genuine satisfaction in how far you\'ve come before beginning anew.',
      money: 'Financial completion and abundance are yours. A long-term financial goal has been achieved, or the work you\'ve done is finally yielding its full return — receive this with gratitude.',
      relationships: 'You have arrived at a place of deep completeness with yourself and others. Your relationships reflect this wholeness — you give and receive freely, without the desperation of lack or the armor of old wounds.',
      growth: 'The World marks the end of one great cycle and the beginning of another. You have integrated your experiences into wisdom, your wounds into strength, your journey into wholeness — and from here, anything is possible.'
    },
    reversed: {
      general: 'Reversed, the World signals incompletion — a cycle that is not quite finished, a destination approached but not quite reached, or a reluctance to fully claim the success that is within your grasp.',
      love: 'You may be sabotaging a deeply fulfilling relationship just as it reaches its fullest potential, or avoiding commitment to a future that is actually within your reach. What is blocking full arrival?',
      career: 'A project or career phase is almost finished but something is preventing true completion — loose ends, unresolved conflicts, or a reluctance to close one chapter and begin the next.',
      money: 'Financial goals are tantalizingly close but kept at bay by shortcuts, incomplete strategies, or a fear of truly arriving at abundance. The reversed World asks: what final step are you avoiding?',
      relationships: 'You are circling the completion of a significant relational cycle without fully arriving. The reversed World asks you to do the final inner work needed to arrive at genuine wholeness in your connections.',
      growth: 'True growth requires closing the loop. The reversed World asks you to identify what you have left unfinished — in yourself, in your relationships, in your work — and bring it to genuine, conscious completion.'
    }
  },
  // ── WANDS ──────────────────────────────────────────────────────────────
  {
    id: 'wands-1-ace',
    name: 'Ace of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 1,
    symbol: '⁂',
    uprightKeywords: ['inspiration', 'new beginnings', 'growth', 'potential', 'spark'],
    reversedKeywords: ['delays', 'lack of motivation', 'creative blocks', 'false starts', 'hesitation'],
    upright: {
      general: 'The Ace of Wands is pure creative potential — a bolt of inspiration arriving from nowhere, lighting every nerve with the electric certainty that something new is beginning. Grab it before it fades.',
      love: 'A new romantic spark is igniting, full of passion, excitement, and the dizzying sense that everything is possible. If you\'re already in a relationship, this card brings a renewal of desire and shared enthusiasm.',
      career: 'A powerful new creative or entrepreneurial opportunity is emerging. The Ace of Wands gives you the green light to launch that project, pitch that idea, or begin the professional adventure you\'ve been imagining.',
      money: 'A new financial venture or income stream is presenting itself. The energy is raw and full of potential — act on this opportunity with boldness, but develop your initial inspiration into a concrete plan.',
      relationships: 'Fresh energy is entering your relational world — a new friendship, a reinvigorated connection, or a spark of authentic communication that transforms a familiar dynamic into something exciting.',
      growth: 'The Ace of Wands marks the beginning of a passionate new chapter in your personal development. The spark of inspiration you feel right now is real — honor it by taking immediate action, however small.'
    },
    reversed: {
      general: 'The spark of inspiration has arrived but something is blocking its expression — internal doubt, external obstacles, or a failure to commit are turning potential into frustration.',
      love: 'A romantic spark that felt promising may be fizzling due to poor timing, incompatibility, or hesitation on one side. Don\'t force what isn\'t flowing naturally — but examine whether fear is the real obstacle.',
      career: 'Creative projects are stalled at the starting line. The reversed Ace of Wands signals false starts, delays, and a frustrating inability to transform inspiration into action — identify the block and address it directly.',
      money: 'A financial opportunity may have arrived too early or been poorly executed. Revisit your plans with fresh eyes and ensure your enthusiasm is backed by practical groundwork before committing resources.',
      relationships: 'New connections feel flat or fail to ignite despite initial interest. You may be holding back your authentic enthusiasm, or the timing simply isn\'t right for this particular connection to take root.',
      growth: 'A personal development initiative is losing momentum before it begins. The reversed Ace of Wands asks you to examine whether this particular direction truly excites you, or whether you\'ve been chasing someone else\'s inspiration.'
    }
  },
  {
    id: 'wands-2',
    name: 'Two of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 2,
    symbol: '⁂',
    uprightKeywords: ['planning', 'vision', 'future', 'discovery', 'boldness'],
    reversedKeywords: ['fear of unknown', 'lack of planning', 'indecision', 'playing small', 'delays'],
    upright: {
      general: 'The Two of Wands shows you standing at the edge of your known world, globe in hand, surveying the vast territory of what is possible. Bold planning and a willingness to venture beyond the familiar are called for.',
      love: 'You are envisioning the future of a relationship — where it could go, what it could become. This is the card of consciously deciding to move forward together into uncharted romantic territory.',
      career: 'Long-range planning is your most powerful professional tool right now. You have already made a promising start — now map out the larger vision and identify the next bold steps that will take you there.',
      money: 'Financial expansion is possible if you are willing to plan ambitiously and take calculated risks. The Two of Wands invites you to think beyond your current circumstances and envision greater financial freedom.',
      relationships: 'A partnership or friendship is reaching the point where you must decide together how far and how deep you want to go. This card invites bold, honest conversations about shared vision and future direction.',
      growth: 'Your growth right now depends on the courage to envision something larger than you\'ve dared before. The Two of Wands asks you to cast your vision wide and then commit to taking the next step toward it.'
    },
    reversed: {
      general: 'Fear of the unknown is keeping you rooted when you were born to move. The reversed Two of Wands points to an inability or unwillingness to plan beyond immediate comfort, shrinking your world unnecessarily.',
      love: 'Indecision about a relationship\'s future — or fear of committing to a shared vision — is creating distance. The reversed Two of Wands asks you to be honest about what you truly want and communicate it clearly.',
      career: 'Lack of long-term planning is leaving you reactive rather than proactive in your career. The reversed Two of Wands asks you to step back from the daily tasks and invest time in mapping out where you\'re actually headed.',
      money: 'Playing it too safe financially is costing you potential growth. The reversed Two of Wands can indicate excessive risk aversion, a failure to plan, or a limiting belief that larger prosperity isn\'t available to you.',
      relationships: 'You may be holding back in a relationship because the future feels uncertain. The reversed Two of Wands asks: is your caution protecting you, or is it preventing you from building something truly meaningful?',
      growth: 'Fear of expanding beyond your comfort zone is the primary obstacle to your development right now. The reversed Two of Wands asks you to name what frightens you about playing bigger and begin there.'
    }
  },
  {
    id: 'wands-3',
    name: 'Three of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 3,
    symbol: '⁂',
    uprightKeywords: ['expansion', 'foresight', 'overseas', 'progress', 'momentum'],
    reversedKeywords: ['obstacles', 'delays', 'frustration', 'lack of foresight', 'stuck'],
    upright: {
      general: 'The Three of Wands shows your ships on the horizon — plans set in motion are now bearing fruit, and what began as a vision is becoming tangible reality. Keep your gaze on the horizon and stay the course.',
      love: 'A relationship is expanding and deepening. Plans made together are beginning to materialize, and there\'s a growing sense of momentum that carries you and a partner forward into shared adventures.',
      career: 'Your professional ventures are gaining traction — projects launched are returning results, and your reputation or reach is expanding. International opportunities or collaborations may be opening up.',
      money: 'Financial plans are beginning to pay off. The Three of Wands signals the early stages of abundance arriving from efforts previously put in motion — your financial ships are coming in.',
      relationships: 'Connections are expanding beyond your immediate circle. The Three of Wands can indicate long-distance friendships deepening, or relationships that are growing through shared adventures and new experiences.',
      growth: 'You are seeing the first tangible results of your personal development efforts. Growth is now visible and externally reflected — others are noticing the changes in you, and this is the beginning of a larger expansion.'
    },
    reversed: {
      general: 'Plans that seemed promising are running into unexpected obstacles. The reversed Three of Wands signals delays, setbacks, or a discouraging gap between what you envisioned and what is actually materializing.',
      love: 'Plans for a relationship — moving in together, taking a trip, deepening commitment — are being blocked or delayed. Examine whether these obstacles are external circumstances or internal ambivalence.',
      career: 'Professional expansion is being thwarted by delays, obstacles, or a lack of the foresight needed to navigate the current landscape. Revisit your strategy and look for the places where your planning has been weak.',
      money: 'Financial growth is slower than anticipated. The reversed Three of Wands asks you to examine the gaps in your planning and address the obstacles that are preventing your financial ships from arriving.',
      relationships: 'Distance — literal or emotional — is creating frustration in a key relationship. The reversed Three of Wands asks you to identify the specific obstacles preventing growth and address them directly.',
      growth: 'You can see where you want to go but something keeps blocking the path forward. The reversed Three of Wands asks you to examine your strategy, adjust your approach, and address the real obstacles to your expansion.'
    }
  },
  {
    id: 'wands-4',
    name: 'Four of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 4,
    symbol: '⁂',
    uprightKeywords: ['celebration', 'homecoming', 'harmony', 'community', 'milestone'],
    reversedKeywords: ['transition', 'instability', 'displacement', 'inner conflict', 'incomplete celebration'],
    upright: {
      general: 'The Four of Wands is pure celebration — a milestone reached, a community gathered, a homecoming that fills the heart with warmth and gratitude. Allow yourself to fully receive this joyful moment.',
      love: 'A relationship milestone is being celebrated — an engagement, a first home, an anniversary, or simply the joy of arriving at a place of genuine stability and happiness together. Revel in this.',
      career: 'A professional achievement deserves genuine celebration. The Four of Wands marks the successful completion of a project, a team victory, or a milestone that should be honored before moving on.',
      money: 'Financial stability has been achieved and it\'s time to celebrate. Whether you\'ve paid off a debt, reached a savings goal, or simply arrived at a place of greater ease, acknowledge this success.',
      relationships: 'Community and belonging are at the heart of your relational world right now. The Four of Wands brings warmth, inclusivity, and the joy of being surrounded by people who genuinely celebrate who you are.',
      growth: 'Celebrating your progress is as important as continuing to grow. The Four of Wands asks you to pause, acknowledge how far you\'ve come, and allow yourself to be nourished by the milestones you\'ve already achieved.'
    },
    reversed: {
      general: 'A celebration is happening but something feels incomplete or destabilizing. The reversed Four of Wands can indicate an impermanent victory, a homecoming fraught with tension, or an inability to fully receive joy.',
      love: 'An important relationship milestone feels anticlimactic or is marked by underlying tension. The reversed Four of Wands asks what is preventing full celebration — and whether it can be addressed before it undermines what\'s been built.',
      career: 'A work achievement isn\'t being properly recognized or celebrated, either by others or by yourself. The reversed Four of Wands asks you to ensure your wins are acknowledged and your team feels genuinely honored.',
      money: 'Financial stability feels precarious or temporary — like the floor could shift again at any moment. The reversed Four of Wands invites you to strengthen the foundation beneath your current stability.',
      relationships: 'Family or community dynamics may be tense beneath a surface of celebration. The reversed Four of Wands can indicate returning to a complicated home environment or a gathering where unspoken tensions simmer.',
      growth: 'You are unable to fully enjoy your progress because something feels incomplete or unstable. The reversed Four of Wands asks you to tend to what is unresolved so you can genuinely receive the gift of your own accomplishments.'
    }
  },
  {
    id: 'wands-5',
    name: 'Five of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 5,
    symbol: '⁂',
    uprightKeywords: ['conflict', 'competition', 'disagreement', 'chaos', 'diversity'],
    reversedKeywords: ['avoiding conflict', 'suppressed tension', 'resolution', 'wasted energy', 'surrender'],
    upright: {
      general: 'The Five of Wands throws you into the thick of competition and conflict — a chaotic scramble where everyone is fighting for position and the noise is overwhelming. Learn to distinguish productive friction from mere chaos.',
      love: 'Conflict and competition are straining your love life — either between you and a partner, or competing priorities pulling you both in different directions. The friction here, if addressed, can actually strengthen the bond.',
      career: 'Workplace competition is fierce. The Five of Wands indicates a contentious environment where ideas clash, office politics run high, and you must be willing to advocate vigorously for your own position and contributions.',
      money: 'Financial competition — fighting for market share, negotiating hard, or navigating conflicting financial priorities — is the dominant theme. Use the pressure to sharpen your skills rather than allowing it to exhaust you.',
      relationships: 'Competing needs, personalities, or opinions are creating friction in your relationships. The Five of Wands asks you to engage with the conflict rather than avoid it — healthy disagreement can lead to genuine understanding.',
      growth: 'Growth comes through engagement with friction rather than retreat from it. The Five of Wands asks you to see conflict and competition as a fire that, if handled skillfully, will forge you into a sharper, stronger version of yourself.'
    },
    reversed: {
      general: 'Conflict is being avoided, suppressed, or has finally reached a point of resolution. The reversed Five of Wands asks whether the peace you\'ve achieved is genuine resolution or simply the silence of exhaustion.',
      love: 'Tension in a relationship is being avoided rather than addressed. The reversed Five of Wands warns that unexpressed conflict doesn\'t disappear — it festers and builds until it erupts in a far more destructive way.',
      career: 'Workplace tensions may have quieted, or you may be exhausted by the competition and ready to disengage. The reversed Five of Wands asks whether withdrawing is a strategic retreat or an avoidance of necessary engagement.',
      money: 'Financial conflicts — with a partner, a business associate, or your own competing values — are being suppressed rather than resolved. Address these tensions before they undermine your financial stability.',
      relationships: 'You may be keeping the peace at the cost of your authentic expression. The reversed Five of Wands asks: what tensions are you swallowing, and is the harmony you\'re maintaining real or simply the absence of conflict?',
      growth: 'You may be surrendering prematurely in a struggle that requires your continued engagement. The reversed Five of Wands asks whether the peace you\'re seeking is earned wisdom or simply avoidance of the growth that friction provides.'
    }
  },
  {
    id: 'wands-6',
    name: 'Six of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 6,
    symbol: '⁂',
    uprightKeywords: ['victory', 'recognition', 'progress', 'self-confidence', 'public praise'],
    reversedKeywords: ['ego', 'arrogance', 'fall from grace', 'lack of recognition', 'private victory'],
    upright: {
      general: 'The Six of Wands arrives with fanfare — you have won, you have succeeded, and the world is taking notice. Allow yourself to receive this public acknowledgment without minimizing what you\'ve achieved.',
      love: 'You are being seen and celebrated in love. A partner is acknowledging your worth, or you are attracting romantic attention that affirms your desirability and value. Let this recognition land.',
      career: 'A professional victory is earning public recognition. A promotion, an award, a successful launch — something you\'ve worked for is being acknowledged by the people whose opinion matters to your career.',
      money: 'Financial success is being recognized — a profitable venture, a successful negotiation, or a windfall that confirms that your efforts have been well placed. Receive this with confidence and gratitude.',
      relationships: 'You are being celebrated by your community. The Six of Wands signals that the people in your life see your worth and want to honor it — allow yourself to receive this appreciation without deflecting.',
      growth: 'A significant milestone in your personal development is being reached and recognized. The Six of Wands marks the moment when internal growth becomes externally visible — own your progress without apology.'
    },
    reversed: {
      general: 'A victory is being undermined — either by your own ego, a fall from grace, or a lack of external recognition that leaves a real achievement feeling hollow. Examine your relationship with public approval.',
      love: 'You may be seeking validation from a romantic partner rather than from within, or your success is creating envy or resentment in a relationship. The reversed Six of Wands asks you to ground your self-worth internally.',
      career: 'A professional achievement isn\'t being recognized as it deserves, or arrogance in the wake of success is alienating the people who helped you get there. Check your ego and acknowledge your collaborators.',
      money: 'Financial success may not be as secure as it appears, or the recognition of your prosperity is creating complications — envy, new expectations, or pressure you didn\'t anticipate.',
      relationships: 'You may be seeking too much external validation from relationships, placing your self-worth in the hands of how others perceive and praise you. The reversed Six of Wands asks you to cultivate inner sources of confidence.',
      growth: 'A victory is being diminished — either because you can\'t fully own it, because others aren\'t recognizing it, or because ego has transformed a genuine achievement into something you\'re using for status rather than joy.'
    }
  },
  {
    id: 'wands-7',
    name: 'Seven of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 7,
    symbol: '⁂',
    uprightKeywords: ['perseverance', 'defensiveness', 'challenges', 'competition', 'standing ground'],
    reversedKeywords: ['giving up', 'overwhelm', 'worn out', 'unnecessary battles', 'retreat'],
    upright: {
      general: 'The Seven of Wands puts you on the high ground — outnumbered but not outmatched, fighting to hold what you have built against those who would challenge or diminish it. Stand your ground with conviction.',
      love: 'You may need to fight for a relationship — against outside interference, against incompatible expectations, or against the fear that love this real isn\'t possible for you. The struggle is worth it.',
      career: 'Your position, reputation, or ideas are being challenged by competitors or critics. The Seven of Wands urges you to defend your work with clear evidence and unshakeable confidence in your own expertise.',
      money: 'Financial pressures and competing demands are requiring you to defend your resources and hold firm to your financial boundaries. Don\'t let guilt or social pressure compromise your financial security.',
      relationships: 'You are holding your ground in a relationship dynamic where your needs and boundaries are being challenged. The Seven of Wands affirms that advocating for yourself is not aggression — it is self-respect.',
      growth: 'Perseverance through opposition is exactly the forge that will harden your character into something truly unshakeable. The Seven of Wands asks you to keep fighting for the vision you know is worth defending.'
    },
    reversed: {
      general: 'You may be overwhelmed by the battles you\'re fighting — either too many fronts at once, or a stubborn insistence on defending a position that no longer needs defending. Choose your battles wisely.',
      love: 'You may be fighting so hard to protect yourself in love that you\'re blocking genuine intimacy. The reversed Seven of Wands asks: are you defending yourself from real threat, or from the vulnerability of being known?',
      career: 'Burnout from constant professional competition and defensiveness is taking its toll. The reversed Seven of Wands asks whether every battle at work needs to be fought, or whether some are better released.',
      money: 'You may be exhausted from financial battles — negotiating, defending, protecting — and ready to give up even on strategies that are working. Discern between healthy tenacity and draining stubbornness.',
      relationships: 'You are wearing yourself out fighting for connections that are taking more than they\'re giving. The reversed Seven of Wands asks you to honestly assess whether standing ground is wisdom or simply exhaustion.',
      growth: 'The reversed Seven of Wands asks you to consider that not every internal challenge needs to be overcome through sheer force of will. Sometimes growth requires the wisdom to stop fighting and simply rest.'
    }
  },
  {
    id: 'wands-8',
    name: 'Eight of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 8,
    symbol: '⁂',
    uprightKeywords: ['speed', 'action', 'air travel', 'swift change', 'momentum'],
    reversedKeywords: ['delays', 'frustration', 'resistance', 'miscommunication', 'slowing down'],
    upright: {
      general: 'The Eight of Wands arrives at speed — everything is moving fast, communications are flying, and the energy of rapid progress is electric. Act now, stay agile, and trust the momentum carrying you forward.',
      love: 'A romantic situation is developing rapidly — a new relationship gaining speed, messages flying back and forth, or an existing connection suddenly accelerating toward a new level of commitment. Enjoy the rush.',
      career: 'Professional momentum is at its peak — projects are advancing quickly, opportunities are arriving faster than expected, and the pace of change is both exhilarating and demanding. Stay focused amid the speed.',
      money: 'Financial transactions and opportunities are moving quickly. Act decisively on time-sensitive financial matters, but ensure you\'re not sacrificing due diligence for the sake of speed.',
      relationships: 'Communications and connections are intensifying and accelerating. The Eight of Wands brings a burst of relational energy — messages, meetings, and meaningful exchanges that move things forward rapidly.',
      growth: 'A period of rapid personal development is underway — insights are arriving quickly, changes are happening fast, and the old self is shedding with unusual speed. Embrace the pace and trust the direction.'
    },
    reversed: {
      general: 'The rapid movement of the Eight of Wands has stalled. Delays, miscommunications, and frustrating blockages are slowing what should be moving freely — examine where the energy is being held up.',
      love: 'A fast-moving romantic connection has hit an unexpected pause. Miscommunications, unanswered messages, or a sudden cooling of momentum are leaving you uncertain. Give it space rather than forcing the pace.',
      career: 'Professional projects are experiencing unexpected delays. The reversed Eight of Wands asks you to diagnose whether the slowdown is external circumstance or whether you have contributed to the communication breakdown.',
      money: 'Financial transactions or opportunities that seemed imminent are delayed. The reversed Eight of Wands cautions against rushing to force through deals that the universe is asking you to examine more carefully.',
      relationships: 'Miscommunication or a breakdown in the natural flow of connection is creating frustration. The reversed Eight of Wands asks you to slow down and ensure that what you\'re communicating is what you actually mean.',
      growth: 'The rapid growth of a previous phase has slowed, and you may be fighting the deceleration. The reversed Eight of Wands suggests that a pause is being built into your growth cycle for necessary integration.'
    }
  },
  {
    id: 'wands-9',
    name: 'Nine of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 9,
    symbol: '⁂',
    uprightKeywords: ['resilience', 'persistence', 'last push', 'boundaries', 'wounded warrior'],
    reversedKeywords: ['exhaustion', 'giving up', 'paranoia', 'stubbornness', 'chronic defensiveness'],
    upright: {
      general: 'The Nine of Wands shows a battle-worn warrior who has faced blow after blow and is still standing. You are exhausted, yes — but you are stronger than you know, and the finish line is closer than it appears.',
      love: 'Past relationship wounds have made you guarded, and that guardedness is understandable. But the Nine of Wands asks whether your defenses are protecting you or preventing the genuine love you\'ve worked so hard for.',
      career: 'You are in the final stretch of a demanding professional challenge. The Nine of Wands honors your resilience and asks you for one more push — the reward for endurance is almost within reach.',
      money: 'Financial struggles have tested your limits, but you are still here and still fighting. The Nine of Wands asks you to find the reserves to endure a little longer — the situation is about to stabilize.',
      relationships: 'Wounds from past relationships are making it hard to show up openly in current connections. The Nine of Wands asks you to be honest about where you are still on guard, and to choose courage over self-protection.',
      growth: 'The most profound growth often happens in the final yards before the breakthrough. You have come further than you realize — honor your resilience, tend your wounds, and do not give up now.'
    },
    reversed: {
      general: 'Exhaustion has tipped into surrender or paranoid rigidity. The reversed Nine of Wands asks whether you are protecting yourself with wisdom and discernment, or simply refusing to trust anyone out of accumulated hurt.',
      love: 'Chronic defensiveness is preventing genuine love from landing. You may be so conditioned to expect betrayal that you sabotage connection before it can hurt you — examine this pattern with compassion.',
      career: 'You are on the edge of giving up on something that is almost complete. The reversed Nine of Wands asks whether the exhaustion you feel is a genuine signal to stop, or simply the burning sensation that comes just before the finish line.',
      money: 'Stubbornly defending a failing financial strategy out of sheer persistence may be costing you more than it is worth. The reversed Nine of Wands asks you to assess honestly whether your financial battle is still worth fighting.',
      relationships: 'Excessive self-protection is driving a wedge between you and people who genuinely care about you. The reversed Nine of Wands asks you to identify the specific wound that keeps triggering your defenses and begin healing it.',
      growth: 'You may be so focused on bracing for the next blow that you can\'t receive the good that is arriving. The reversed Nine of Wands asks you to consider whether the vigilance you\'ve cultivated has become its own kind of prison.'
    }
  },
  {
    id: 'wands-10',
    name: 'Ten of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 10,
    symbol: '⁂',
    uprightKeywords: ['burden', 'overwork', 'responsibility', 'stress', 'completion'],
    reversedKeywords: ['dropping the burden', 'delegation', 'inability to let go', 'martyrdom', 'burnout'],
    upright: {
      general: 'The Ten of Wands shows you carrying an enormous load — too much responsibility, too many commitments, and a pace that is not sustainable. The finish line is ahead, but you must ask what you can lay down.',
      love: 'You may be carrying all the emotional labor in a relationship — managing, anticipating, and compensating in ways that are exhausting you. The Ten of Wands asks for a more equitable distribution of relational work.',
      career: 'Overwork and excessive responsibility are threatening your wellbeing. The Ten of Wands signals burnout on the horizon unless you begin to delegate, decline, and establish clearer limits on what you carry.',
      money: 'Financial obligations and responsibilities are feeling overwhelming. The Ten of Wands asks you to examine which of your financial burdens are truly yours to carry and which have been taken on unnecessarily.',
      relationships: 'You are carrying more than your share of responsibility in your relationships — managing others\' emotions, solving their problems, showing up for everyone. This generosity will eventually run dry without reciprocity.',
      growth: 'Growth right now requires you to put down some of what you\'re carrying. The Ten of Wands asks: what responsibilities, obligations, or identities have you taken on that are not actually yours to bear?'
    },
    reversed: {
      general: 'The reversed Ten of Wands signals that a burden is being released — either through conscious choice to delegate and simplify, or through a collapse that forces the letting go that was long overdue.',
      love: 'You are releasing the habit of carrying all of the emotional work in a relationship. This can feel terrifying, but it is also the only path to a genuinely equitable and sustainable partnership.',
      career: 'You are learning to delegate, to say no, and to release the belief that only you can carry the weight of your professional responsibilities. This is a profound and necessary professional maturation.',
      money: 'Financial burdens that have been crushing you are being released or restructured. The reversed Ten of Wands signals a welcome lightening — debt relief, simplified obligations, or a better-managed load.',
      relationships: 'You are either finally releasing the excessive burden of responsibility for others, or you are completely unable to let go even when it is harming you. The reversed Ten of Wands asks which is true for you.',
      growth: 'True growth requires releasing the burdens you have mistaken for your identity. The reversed Ten of Wands invites you to put down what isn\'t yours and discover what you are like when you are no longer weighed down.'
    }
  },
  {
    id: 'wands-11-page',
    name: 'Page of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 11,
    symbol: '⁂',
    uprightKeywords: ['enthusiasm', 'exploration', 'discovery', 'free spirit', 'messages'],
    reversedKeywords: ['hasty', 'scattered', 'lack of direction', 'immaturity', 'unreliable'],
    upright: {
      general: 'The Page of Wands arrives with infectious enthusiasm and boundless curiosity — a messenger of creative fire who delights in every new discovery and approaches life as one grand adventure.',
      love: 'Playful, exploratory romantic energy is entering your life — either as a new admirer full of spontaneous passion, or as an invitation to bring more lightness and adventure into your existing relationship.',
      career: 'A new creative project or career exploration is beginning with genuine excitement. The Page of Wands encourages you to follow your curiosity without overthinking — let passion lead the way.',
      money: 'Fresh financial ideas are arriving with exciting potential. The Page of Wands brings the energy of new income possibilities — explore them with enthusiasm but build a realistic plan before fully committing.',
      relationships: 'New, energizing connections are entering your world — people who are spontaneous, creative, and full of life. Let these relationships bring out your own playful, adventurous spirit.',
      growth: 'You are beginning a new phase of personal exploration with the open heart of a beginner. The Page of Wands asks you to stay curious, try things you\'ve never tried, and learn as you go without needing to know in advance.'
    },
    reversed: {
      general: 'The enthusiasm of the Page has become scattered or immature — too many ideas chased simultaneously, grand declarations without follow-through, or a refusal to develop raw potential into actual skill.',
      love: 'Immature behavior or a lack of follow-through in romance is causing disappointment. Someone may be sending mixed signals, making big promises without backing them up, or fleeing commitment when things get real.',
      career: 'Great ideas are going nowhere because they\'re not being developed with discipline. The reversed Page of Wands asks you to choose one creative direction and commit to developing it past the initial spark.',
      money: 'Financial impulsiveness and a scattershot approach to new income opportunities are wasting your resources. Slow down, evaluate ideas critically, and focus your energy on what has the most realistic potential.',
      relationships: 'A new connection may be all flash and no substance — exciting but unreliable. The reversed Page of Wands asks you to assess whether the exciting energy of a new relationship is backed by genuine character.',
      growth: 'You are starting many things and finishing few. The reversed Page of Wands asks you to develop the discipline to take one promising beginning all the way through — the real growth lives on the other side of the first flush of enthusiasm.'
    }
  },
  {
    id: 'wands-12-knight',
    name: 'Knight of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 12,
    symbol: '⁂',
    uprightKeywords: ['action', 'adventure', 'impulsiveness', 'energy', 'passion'],
    reversedKeywords: ['recklessness', 'impatience', 'burnout', 'aggression', 'scattered'],
    upright: {
      general: 'The Knight of Wands charges in with unstoppable fire energy — passionate, bold, and utterly fearless. When this energy arrives, the call is to act decisively and let the heat of your conviction carry you forward.',
      love: 'A passionate, adventurous romantic energy is sweeping in. The Knight of Wands brings intense attraction, spontaneous gestures, and the exhilarating feeling of being fully alive in love — enjoy every electric moment.',
      career: 'Your energy and drive are at their peak — throw yourself into your professional ambitions with full commitment. The Knight of Wands rewards bold action taken with conviction and speed.',
      money: 'A bold financial move is calling for your immediate attention. The Knight of Wands rewards decisiveness and courage — if an opportunity aligns with your instincts, move on it before the moment passes.',
      relationships: 'Passionate, dynamic energy is entering your relational world. Connections right now feel intense and meaningful — embrace the heat while remaining mindful of rash words or impulsive actions that can leave marks.',
      growth: 'Your growth right now comes from throwing yourself fully into the direction that excites you most. The Knight of Wands asks you to act on inspiration with your whole body, not just your head.'
    },
    reversed: {
      general: 'The Knight\'s fire has gone uncontrolled — reckless actions, aggressive impulses, and burned bridges are the consequence of passion without direction. Slow down before your own heat becomes your destruction.',
      love: 'Reckless behavior or a volatile temper is damaging a romantic relationship. The reversed Knight of Wands can indicate someone who runs hot and cold, creating an exhausting and unstable romantic dynamic.',
      career: 'Impulsive professional decisions made without adequate forethought are creating problems. The reversed Knight of Wands asks you to introduce even a small measure of patience and strategy before acting.',
      money: 'Financial recklessness — impulsive spending, hasty investments, or gambling on hunches — is creating instability. The reversed Knight of Wands asks you to harness your financial boldness with at least basic due diligence.',
      relationships: 'Someone in your life may be acting with intense, volatile energy that makes genuine connection difficult. Or you may be the one whose fire is burning too hot and scorching those who care about you.',
      growth: 'Scattered, impulsive energy is preventing meaningful development. The reversed Knight of Wands asks you to focus the fire of your passion on one clear direction and cultivate the discipline to stay the course.'
    }
  },
  {
    id: 'wands-13-queen',
    name: 'Queen of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 13,
    symbol: '⁂',
    uprightKeywords: ['confidence', 'independence', 'charisma', 'determination', 'vibrancy'],
    reversedKeywords: ['jealousy', 'demanding', 'overbearing', 'insecurity', 'manipulative'],
    upright: {
      general: 'The Queen of Wands burns bright and fierce — magnetically confident, fiercely independent, and radiantly alive. She asks nothing she hasn\'t earned and offers nothing she doesn\'t truly mean.',
      love: 'You are at your most magnetic and irresistible. The Queen of Wands in love brings vibrant, confident romantic energy — you know what you want and you are not afraid to go after it with unapologetic intention.',
      career: 'Your charisma, creativity, and self-assurance are your most powerful professional assets right now. Lead with your full personality and trust that your authenticity is what makes you truly exceptional.',
      money: 'Financial confidence and a natural instinct for abundance characterize this phase. The Queen of Wands manages money with the same magnetic ease with which she manages everything — trust your financial instincts.',
      relationships: 'You bring warmth, passion, and genuine generosity to your relationships. The Queen of Wands loves fully and expects the same in return — her standards are high because she knows her own worth.',
      growth: 'Your growth right now comes from inhabiting your full power without apology. The Queen of Wands asks you to stop waiting for permission to take up space — you are the fire, and your light belongs in the world.'
    },
    reversed: {
      general: 'The Queen\'s fire has turned inward and become destructive — jealousy, manipulation, overbearing behavior, or an insecurity that undermines her remarkable natural gifts.',
      love: 'Jealousy, possessiveness, or emotional manipulation may be poisoning a romantic dynamic. The reversed Queen of Wands asks you to examine whether your intensity comes from confidence or from fear of being abandoned.',
      career: 'An overbearing or manipulative energy at work — either yours or a colleague\'s — is creating toxicity. The reversed Queen of Wands asks you to channel your formidable energy in a more constructive, generous direction.',
      money: 'Insecurity about your financial value or competitive jealousy of others\' prosperity is creating a scarcity mindset. The reversed Queen of Wands asks you to redirect your fire toward building your own wealth rather than measuring against others.',
      relationships: 'You may be burning too hot in relationships — demanding, intense, and overwhelming to those who cannot match your energy. The reversed Queen of Wands asks you to temper your expectations with compassion.',
      growth: 'Insecurity is dimming your natural radiance. The reversed Queen of Wands asks you to look honestly at the fear beneath your intensity — addressing this root insecurity will free you to inhabit your full power authentically.'
    }
  },
  {
    id: 'wands-14-king',
    name: 'King of Wands',
    arcana: 'minor',
    suit: 'wands',
    number: 14,
    symbol: '⁂',
    uprightKeywords: ['leadership', 'vision', 'entrepreneur', 'honor', 'bold'],
    reversedKeywords: ['impulsiveness', 'tyranny', 'arrogance', 'ruthlessness', 'high expectations'],
    upright: {
      general: 'The King of Wands is the visionary leader — bold, honorable, and absolutely magnetic. He commands through inspiration rather than fear, and his conviction has the power to move mountains and hearts alike.',
      love: 'Passionate, mature, and purposeful romantic energy is at the forefront. The King of Wands in love is the partner who chooses you fully and boldly — or the energy within you that knows exactly what kind of love you deserve.',
      career: 'Your entrepreneurial spirit and leadership capacity are fully ignited. The King of Wands invites you to step into the visionary role — to lead with bold conviction and trust that your creative authority will inspire others.',
      money: 'Entrepreneurial financial instincts are at their sharpest. The King of Wands has built wealth through vision and decisive action — channel this energy into your own financial strategy with confidence.',
      relationships: 'You bring passionate leadership to your relationships — setting the tone with generosity, vision, and bold honesty. The King of Wands cultivates connection through authentic presence, not performance.',
      growth: 'You are stepping into the fullness of your visionary power. The King of Wands asks you to own your leadership not just in your career, but in every area of your life — including your own inner kingdom.'
    },
    reversed: {
      general: 'The King\'s great power has become tyrannical — arrogant, impulsive, and ruthless. An unchecked ego is driving decisions that damage rather than build, and the vision has curdled into self-serving aggression.',
      love: 'Domineering behavior or high-handed expectations are suffocating a romantic relationship. The reversed King of Wands asks whether you are leading in love with genuine care or simply imposing your will.',
      career: 'Arrogance and impulsive leadership decisions are alienating your team and undermining your own vision. The reversed King of Wands asks you to remember that true leadership serves the collective, not just the leader\'s ego.',
      money: 'Reckless financial decisions made from a place of arrogance or impatience are creating instability. The reversed King of Wands asks you to combine your bold financial instincts with at least some degree of measured planning.',
      relationships: 'Domineering behavior or unrealistic expectations are driving people away. The reversed King of Wands asks you to examine whether your fire is warming or burning the people in your relational world.',
      growth: 'Unchecked ego is the primary obstacle to your continued growth. The reversed King of Wands asks you to examine where your boldness has tipped into arrogance, and to cultivate the humility that makes great leadership truly great.'
    }
  },
  // ── CUPS ───────────────────────────────────────────────────────────────
  {
    id: 'cups-1-ace',
    name: 'Ace of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 1,
    symbol: '◡',
    uprightKeywords: ['new love', 'emotional awakening', 'compassion', 'overflow', 'intuition'],
    reversedKeywords: ['emotional blockage', 'repressed feelings', 'emptiness', 'heartbreak', 'withdrawal'],
    upright: {
      general: 'The Ace of Cups is the Holy Grail of emotional life — a vessel overflowing with love, compassion, and spiritual nourishment. Your heart is opening to something vast and beautiful; receive it without conditions.',
      love: 'A new love is beginning, or an existing relationship is experiencing a profound emotional renewal. The heart is wide open and the conditions for deep, genuine connection have never been more favorable.',
      career: 'Emotional fulfillment and passion are entering your professional life — a vocation that feeds your soul rather than simply your bank account is becoming available. Follow what genuinely moves you.',
      money: 'Financial abundance arrives alongside emotional prosperity — the Ace of Cups suggests that when you align your work with your deepest values, material sufficiency follows naturally.',
      relationships: 'Your capacity for love, empathy, and compassion is at its peak. New relationships formed now will have unusual depth and meaning — you are meeting people at a genuine soul level.',
      growth: 'Emotional growth is the primary work of this season. The Ace of Cups invites you to open your heart wider than before — to love more freely, to feel more fully, and to trust the wisdom of your emotional nature.'
    },
    reversed: {
      general: 'The cup has been overturned — emotional energy is blocked, repressed, or leaking in ways that prevent you from receiving the love and nourishment that is trying to reach you.',
      love: 'Emotional walls are preventing genuine connection. Past heartbreak or fear of vulnerability is keeping your heart defended against the very love you most desire. Gentle, courageous opening is needed.',
      career: 'Emotional disconnection from your work is creating a hollow feeling even when external markers of success are present. The reversed Ace of Cups asks you to reconnect with what genuinely moves and motivates you.',
      money: 'A poverty of emotional nourishment is coloring your relationship with money — seeking material comfort to fill an emotional void will never truly satisfy. Address the emotional root cause.',
      relationships: 'Emotional withdrawal is creating distance in your closest connections. The reversed Ace of Cups asks what it would take for you to open your heart again — and what it is costing you to keep it closed.',
      growth: 'You are resisting the emotional growth that is trying to move through you. The reversed Ace of Cups asks what you are afraid to feel and whether avoiding those feelings is actually keeping you safe.'
    }
  },
  {
    id: 'cups-2',
    name: 'Two of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 2,
    symbol: '◡',
    uprightKeywords: ['partnership', 'mutual attraction', 'unity', 'harmony', 'connection'],
    reversedKeywords: ['imbalance', 'broken bond', 'miscommunication', 'tension', 'codependency'],
    upright: {
      general: 'The Two of Cups is the purest image of mutual recognition — two souls meeting in genuine resonance, creating something greater than either could achieve alone. This is the card of soulful partnership.',
      love: 'A beautiful romantic union is forming or deepening — characterized by mutual respect, genuine attraction, and the rare sense of being truly seen and chosen. Cherish this connection with full presence.',
      career: 'A professional partnership or creative collaboration is forming that has genuine chemistry and complementary strengths. The Two of Cups in career suggests that the right alliance can transform your work.',
      money: 'Financial partnerships built on mutual trust and aligned goals are favored. The Two of Cups suggests that your financial situation benefits from cooperation and that shared resources can multiply prosperity.',
      relationships: 'A deep, reciprocal bond is forming or being celebrated. The Two of Cups marks the kind of connection — romantic, platonic, or professional — where both parties bring their best and feel genuinely honored.',
      growth: 'True growth often happens in the mirror of genuine relationship. The Two of Cups invites you to allow a close connection to help you see yourself more clearly, and to offer that same loving reflection in return.'
    },
    reversed: {
      general: 'A bond that was harmonious is experiencing strain — imbalance, miscommunication, or a painful growing-apart is disrupting a connection that felt destined. Both parties must examine what has been left unsaid.',
      love: 'A romantic relationship is out of balance — one partner giving more, trust eroded by miscommunication, or a connection that seemed fated revealing its fragility under pressure.',
      career: 'A professional partnership is experiencing tension or breakdown. Differing values, miscommunication, or a growing imbalance in contribution and recognition are threatening what was once a productive alliance.',
      money: 'Financial disagreements or an imbalance in a shared financial arrangement are causing strain. The reversed Two of Cups asks you to address the relational dynamic beneath the money conflict.',
      relationships: 'A once-close connection is becoming strained or distant. The reversed Two of Cups asks whether the bond can be restored through honest conversation, or whether both parties have grown in incompatible directions.',
      growth: 'Codependency masquerading as deep connection may be limiting your individual growth. The reversed Two of Cups asks whether the closeness you value in a relationship is enhancing or diminishing who you are.'
    }
  },
  {
    id: 'cups-3',
    name: 'Three of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 3,
    symbol: '◡',
    uprightKeywords: ['celebration', 'friendship', 'community', 'abundance', 'joy'],
    reversedKeywords: ['gossip', 'overindulgence', 'isolation', 'third parties', 'canceled celebrations'],
    upright: {
      general: 'The Three of Cups is pure celebration — an overflow of joy shared among kindred spirits, the warm magic of chosen community, and the healing power of genuine friendship. Let yourself be held by your people.',
      love: 'Love is surrounded by warmth and the blessing of community. The Three of Cups in romance can signal a relationship that is celebrated by friends and family, or the joy of sharing your heart with someone your whole world loves.',
      career: 'Team victories, collaborative celebrations, and the joy of working with people who genuinely inspire and support you are highlighted. The Three of Cups brings professional abundance through community.',
      money: 'Financial abundance is amplified by sharing and generosity. The Three of Cups suggests that celebrating your prosperity with others — treating people you love, investing in community — multiplies the joy of your success.',
      relationships: 'Your friendships and social bonds are one of your greatest sources of nourishment right now. The Three of Cups asks you to lean into your community, to celebrate together, and to allow yourself to be deeply known and loved.',
      growth: 'Growth happens in community as well as in solitude. The Three of Cups invites you to allow the people in your life to contribute to your development — to let yourself be seen, supported, and celebrated.'
    },
    reversed: {
      general: 'The joy of community is being disrupted — by gossip, by overindulgence, by an unwillingness to celebrate, or by a painful exclusion from the circle of belonging you most need.',
      love: 'Third-party interference — gossip, well-meaning but disruptive advice from others, or a literal third person — may be creating complications in a romantic relationship.',
      career: 'Office politics, gossip, or a clique mentality is undermining genuine team cohesion. The reversed Three of Cups asks you to rise above petty dynamics and create the kind of community that actually serves everyone.',
      money: 'Overindulgence in social spending — celebrating too lavishly, giving too generously without regard for your own needs — may be straining your finances. Find the balance between generosity and sustainability.',
      relationships: 'Isolation or exclusion from community is creating a painful gap. Alternatively, a group dynamic is becoming toxic — gossip, backstabbing, or cliquishness is poisoning what should be a nourishing circle.',
      growth: 'You may be using social celebration as a way to avoid deeper inner work. The reversed Three of Cups asks whether your social life is a genuine source of nourishment or a distraction from the growth that is asking to happen.'
    }
  },
  {
    id: 'cups-4',
    name: 'Four of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 4,
    symbol: '◡',
    uprightKeywords: ['contemplation', 'apathy', 'reevaluation', 'withdrawal', 'discontent'],
    reversedKeywords: ['sudden awareness', 'acceptance', 'reengage', 'clarity', 'missed opportunity'],
    upright: {
      general: 'The Four of Cups shows you withdrawn in contemplation, dissatisfied with what you have been offered, your arms crossed against a world that keeps extending gifts you cannot seem to receive.',
      love: 'A relationship or romantic opportunity is being met with apathy or discontent. You may be so focused on what is missing that you cannot see what is genuinely being offered — a beautiful possibility is within reach if you open.',
      career: 'Professional disillusionment or boredom is setting in. The Four of Cups asks whether your dissatisfaction is pointing to a genuine need for change or whether you have temporarily lost the ability to appreciate what you have.',
      money: 'You may be discontent with your financial situation despite having more than you acknowledge. The Four of Cups asks you to examine whether your dissatisfaction is based on genuine lack or a scarcity lens.',
      relationships: 'Withdrawal, emotional numbness, or a refusal to engage are creating distance in your connections. The Four of Cups asks what has happened to dampen your enthusiasm for the relationships in your life.',
      growth: 'A period of genuine contemplation and reevaluation is necessary. The Four of Cups asks you to sit with your discontent long enough to understand what it is truly pointing to — not every offer should be accepted, and not every dissatisfaction should be dismissed.'
    },
    reversed: {
      general: 'A period of contemplative withdrawal is ending — you are emerging from apathy with new clarity, ready to engage with the opportunities that were waiting for you to notice them.',
      love: 'You are waking up to a romantic possibility that you had been too closed or too distracted to perceive. The reversed Four of Cups signals a renewed openness to love and a willingness to reach for what is being offered.',
      career: 'Professional motivation is returning after a period of disengagement. The reversed Four of Cups brings a fresh perspective that allows you to see the opportunities in your current situation that your previous apathy had hidden.',
      money: 'You are seeing your financial situation with fresh, more appreciative eyes. A missed financial opportunity may become available again — this time, approach it with open arms rather than crossed ones.',
      relationships: 'You are re-engaging with the relationships in your life after a period of withdrawal. The reversed Four of Cups brings a renewed desire to connect, to receive, and to invest in the people who matter to you.',
      growth: 'Emerging from a contemplative period, you carry new clarity about what you truly want and what you have been taking for granted. The reversed Four of Cups marks the moment of re-engagement with the life that has been waiting for you.'
    }
  },
  {
    id: 'cups-5',
    name: 'Five of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 5,
    symbol: '◡',
    uprightKeywords: ['grief', 'loss', 'regret', 'mourning', 'disappointment'],
    reversedKeywords: ['moving on', 'acceptance', 'healing', 'releasing grief', 'forgiveness'],
    upright: {
      general: 'The Five of Cups stands in grief, staring at three spilled cups while behind them, two cups remain standing and full. Loss is real — but the mourning is consuming you to the point where you cannot see what remains.',
      love: 'A loss, heartbreak, or disappointment in love is demanding to be fully grieved. The Five of Cups honors the pain of romantic disappointment — give yourself permission to mourn, but don\'t allow grief to become your permanent residence.',
      career: 'A professional disappointment — a failed project, a missed opportunity, an unexpected setback — needs to be fully processed before you can move forward. Grief is not weakness; it is the honest acknowledgment of what mattered.',
      money: 'A financial loss is weighing heavily. The Five of Cups validates the grief of this loss while gently pointing to the resources that remain — what survived the loss is still real and still valuable.',
      relationships: 'A loss within a relationship — a friendship ended, a bond strained, a trust broken — is causing genuine grief. Honor the sadness while also looking for what is still intact in your relational world.',
      growth: 'Grief is not the opposite of growth — it is often its most essential fuel. The Five of Cups asks you to fully feel what has been lost, then slowly turn toward what remains and what is still possible.'
    },
    reversed: {
      general: 'The period of grief is softening — you are slowly turning away from the spilled cups and beginning to notice the two that remain standing. Healing and acceptance are beginning their quiet work.',
      love: 'You are moving through heartbreak toward acceptance. The reversed Five of Cups signals a gradual return to hope — the wound is not healed, but it is no longer the only thing you can see.',
      career: 'You are processing a professional disappointment and beginning to see a path forward. The reversed Five of Cups brings the energy of recovery — learning from the loss and redirecting your efforts.',
      money: 'Financial losses are beginning to heal, and a more balanced perspective on what remains is emerging. The reversed Five of Cups asks you to focus on rebuilding from what survived rather than continuing to mourn what was lost.',
      relationships: 'Forgiveness and healing are becoming possible in a relationship that was damaged. The reversed Five of Cups brings the beginning of a new chapter — not forgetting, but releasing the hold that grief has had on the connection.',
      growth: 'You are integrating the lessons of a painful loss into genuine wisdom. The reversed Five of Cups marks the moment of turning — from grief toward growth, from absence toward the renewed appreciation of presence.'
    }
  },
  {
    id: 'cups-6',
    name: 'Six of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 6,
    symbol: '◡',
    uprightKeywords: ['nostalgia', 'innocence', 'reunion', 'past', 'childhood'],
    reversedKeywords: ['stuck in the past', 'outdated patterns', 'naivety', 'moving forward', 'release'],
    upright: {
      general: 'The Six of Cups carries the golden warmth of cherished memory — a return to innocence, a reunion with the past, or the tender gift of pure, uncomplicated joy. Revisit what once nourished your soul.',
      love: 'A reunion with an old love may be approaching, or your current relationship is being infused with the sweet nostalgia of early romance. The Six of Cups invites you to remember why you chose this person.',
      career: 'Revisiting past skills, projects, or professional relationships that were once meaningful may open unexpected doors. The Six of Cups also signals work with children or creative fields that reconnect you to innocent joy.',
      money: 'Past financial support or a windfall connected to family or inheritance may be arriving. The Six of Cups also asks you to examine the money patterns you inherited from your childhood home.',
      relationships: 'A reconnection with an old friend, a family member, or a childhood bond is nourishing and meaningful. The Six of Cups carries the healing energy of being known by someone who has known you for a long time.',
      growth: 'Growth sometimes requires returning to your roots — revisiting the passions, values, and innocent curiosity of your younger self to rediscover what was always most essentially yours.'
    },
    reversed: {
      general: 'You are being held in the past — by nostalgia, by unresolved childhood patterns, or by a refusal to accept that the world you are longing for no longer exists in the form you remember it.',
      love: 'Idealizing a past relationship or carrying patterns from childhood into your current romantic life is preventing you from being fully present with what is in front of you. Release the comparison.',
      career: 'You may be living in professional nostalgia — longing for how things used to be rather than engaging creatively with what is possible now. The reversed Six of Cups invites you into the present moment of your career.',
      money: 'Outdated money patterns inherited from childhood — scarcity beliefs, guilt about wealth, or a tendency to regress financially when stressed — are limiting your current financial growth. Examine these old programs.',
      relationships: 'You may be seeing a current relationship through the lens of a past one, unable to see the person in front of you clearly. The reversed Six of Cups asks you to release the comparison and meet this relationship fresh.',
      growth: 'Nostalgia has become a form of avoidance — retreating into the past to escape the demands of the present. The reversed Six of Cups asks you to honor your history while choosing to fully inhabit your life as it is now.'
    }
  },
  {
    id: 'cups-7',
    name: 'Seven of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 7,
    symbol: '◡',
    uprightKeywords: ['illusion', 'fantasy', 'wishful thinking', 'choices', 'daydreams'],
    reversedKeywords: ['clarity', 'decision', 'grounded', 'reality', 'illusion exposed'],
    upright: {
      general: 'The Seven of Cups presents you with a bewildering array of visions — beautiful, terrifying, tempting, and fantastical. The challenge is to distinguish between what you truly want and what is mere illusion or escapism.',
      love: 'Romantic fantasies may be more compelling than reality right now — you may be projecting an ideal onto a real person, or avoiding a real relationship for the seductive comfort of imagination.',
      career: 'An overwhelming number of options and ideas are making it difficult to choose a direction. The Seven of Cups asks you to critically evaluate your professional visions and identify which ones are truly viable.',
      money: 'Wishful financial thinking — get-rich dreams, grandiose plans that don\'t hold up to scrutiny, or an avoidance of real financial planning through fantasy — is the primary pitfall here.',
      relationships: 'You may be seeing a person through the distorting lens of what you wish they were rather than who they actually are. The Seven of Cups asks for greater discernment in how you perceive the people in your life.',
      growth: 'Too many possibilities without commitment to any of them is a form of avoidance. The Seven of Cups asks you to move from wishful thinking to concrete intention — choose one vision and begin building it in the real world.'
    },
    reversed: {
      general: 'The fog of illusion is lifting and reality is becoming clearer. The reversed Seven of Cups brings the clarity to see through wishful thinking and the decisiveness to choose the path that is actually real and viable.',
      love: 'The romantic fantasies or illusions that were clouding your judgment are dissipating. You are beginning to see a person or situation with much greater clarity — and this clarity, however sobering, is a gift.',
      career: 'The overwhelming array of options has narrowed to a clear and grounded choice. The reversed Seven of Cups brings focus and practical commitment after a period of scattered dreaming.',
      money: 'Financial fantasies are being replaced by realistic assessment. The reversed Seven of Cups brings the clarity to make sound financial decisions based on actual data rather than wishful projections.',
      relationships: 'You are seeing a key relationship much more clearly — perhaps more painfully clearly — as the illusions you carried about it dissolve. This is uncomfortable but ultimately essential for genuine connection.',
      growth: 'Clarity is returning after a period of confusion and scattered energy. The reversed Seven of Cups marks the moment when you finally choose — when you commit to one real path rather than endlessly contemplating a dozen imaginary ones.'
    }
  },
  {
    id: 'cups-8',
    name: 'Eight of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 8,
    symbol: '◡',
    uprightKeywords: ['walking away', 'disillusionment', 'leaving behind', 'seeking deeper meaning', 'transition'],
    reversedKeywords: ['fear of moving on', 'staying for wrong reasons', 'avoidance', 'stagnation', 'drifting'],
    upright: {
      general: 'The Eight of Cups shows a figure walking away from everything they have built — not because it was taken, but because it no longer holds what the soul needs. This is one of the bravest cards in the deck.',
      love: 'A relationship that once satisfied you no longer meets the deeper needs of your soul. The Eight of Cups asks whether you have the courage to leave something that is comfortable but no longer truly fulfilling.',
      career: 'You are being called to leave a career situation that, while externally successful, has lost its meaning for you. The Eight of Cups honors the courage to walk away from achievement that no longer serves your soul.',
      money: 'You may be walking away from a financial situation that no longer aligns with your values, even if it was profitable. The Eight of Cups asks whether the cost — to your soul, your wellbeing — is worth the material reward.',
      relationships: 'A friendship or connection has run its course and you are sensing it is time to move on. The Eight of Cups asks you to honor the truth of what you feel rather than staying out of obligation or fear.',
      growth: 'The most profound growth sometimes requires walking away from what you have built to pursue what you have not yet become. The Eight of Cups is the archetype of the seeker who chooses soul over comfort.'
    },
    reversed: {
      general: 'You are unable or unwilling to leave a situation that no longer serves you — either from fear of the unknown, guilt about abandoning what you built, or a desperate hope that something may yet change.',
      love: 'You are staying in a relationship that has run its course because leaving feels too frightening or too final. The reversed Eight of Cups asks: what are you staying for, and is it a real reason or just fear?',
      career: 'You know it is time to move on from a professional situation that has lost its meaning, but fear of uncertainty is keeping you anchored. The reversed Eight of Cups asks what it would take for you to take the brave step.',
      money: 'Financial fear is keeping you in a situation that drains your spirit. The reversed Eight of Cups asks whether the security you are protecting is truly worth the cost of staying where you have already left in your heart.',
      relationships: 'You are drifting in a relationship rather than making a conscious choice to stay or go. The reversed Eight of Cups asks for the honesty and courage to choose — either to fully commit or to genuinely release.',
      growth: 'Fear of what lies beyond a familiar but exhausted chapter is preventing your evolution. The reversed Eight of Cups asks you to trust that leaving what no longer serves you is not loss — it is the prerequisite for true growth.'
    }
  },
  {
    id: 'cups-9',
    name: 'Nine of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 9,
    symbol: '◡',
    uprightKeywords: ['contentment', 'wishes fulfilled', 'satisfaction', 'gratitude', 'pleasure'],
    reversedKeywords: ['dissatisfaction', 'greed', 'smugness', 'materialism', 'unfulfilled wishes'],
    upright: {
      general: 'The Nine of Cups is the wish card — the deep satisfaction of having genuinely arrived at a place of contentment. Your heart\'s desires are within reach or already manifested. Receive this fullness with gratitude.',
      love: 'Your wish for love is being granted. The Nine of Cups brings romantic fulfillment — a relationship that truly satisfies at the level of heart, body, and soul. Allow yourself to bask in this happiness without guilt.',
      career: 'Professional fulfillment and the deep satisfaction of work you love is yours. The Nine of Cups marks the arrival at a career peak — a role, an achievement, or a creative project that truly reflects your best self.',
      money: 'Financial wishes are being fulfilled. The Nine of Cups brings material abundance and the emotional satisfaction that comes from genuine security. Enjoy your prosperity and share it freely.',
      relationships: 'Your relational world is abundant and satisfying. The Nine of Cups brings the warm pleasure of being surrounded by people who truly love you and whom you truly love in return.',
      growth: 'You have arrived at a place of genuine inner satisfaction — not complacency, but the earned contentment of someone who has done meaningful work and is now receiving its reward. Drink from this cup fully.'
    },
    reversed: {
      general: 'The wish was granted but the satisfaction is hollow — either the thing you wanted doesn\'t deliver what you hoped, or a smug self-satisfaction is preventing you from seeing what is still needed.',
      love: 'Romantic satisfaction is eluding you despite having what seems like everything you wanted. The reversed Nine of Cups asks whether you have been wishing for the right things, or whether surface desires are masking deeper needs.',
      career: 'Professional success feels hollow or insufficient. The reversed Nine of Cups asks whether the career achievements you have been pursuing will actually satisfy your soul, or whether you\'ve been chasing the wrong dreams.',
      money: 'Material abundance is present but isn\'t delivering the happiness it promised. The reversed Nine of Cups points to the gap between material and emotional wealth — you may have enough, and yet something essential is still missing.',
      relationships: 'Complacency or a subtle smug self-satisfaction may be preventing genuine emotional intimacy. The reversed Nine of Cups asks whether you are truly present with the people you love or simply pleased with the appearance of connection.',
      growth: 'A wish fulfilled has led to stagnation — having arrived at a goal, you have stopped growing. The reversed Nine of Cups asks you to hold your contentment lightly and continue exploring what calls to you beyond what you\'ve already achieved.'
    }
  },
  {
    id: 'cups-10',
    name: 'Ten of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 10,
    symbol: '◡',
    uprightKeywords: ['harmony', 'family', 'happiness', 'fulfillment', 'home'],
    reversedKeywords: ['broken home', 'dysfunction', 'disconnection', 'forced happiness', 'disharmony'],
    upright: {
      general: 'The Ten of Cups is the ultimate vision of emotional fulfillment — the rainbow of joy above, the family united below, the home and the heart in perfect harmony. This is what love, in its fullness, can look like.',
      love: 'Deep, abiding happiness in love — the kind that feels like coming home. The Ten of Cups in romance signals a relationship of profound emotional fulfillment, genuine partnership, and shared joy in the life you are building together.',
      career: 'The emotional fulfillment of your professional life is complete — your work is aligned with your values, your relationships at work are genuinely supportive, and you feel a sense of deep satisfaction in what you contribute.',
      money: 'Financial abundance is allowing you to build the home and the life that represents your deepest vision of happiness. The Ten of Cups brings the security and generosity that comes from genuine prosperity.',
      relationships: 'Your relational world is filled with genuine love, harmony, and mutual support. The Ten of Cups celebrates the full spectrum of your connections — family of origin, chosen family, and beloved community.',
      growth: 'You have arrived at a place of genuine emotional wholeness. The Ten of Cups marks the completion of an emotional journey — the integration of heart, home, and soul into a coherent and deeply satisfying whole.'
    },
    reversed: {
      general: 'The family picture has cracks — dysfunction beneath a surface harmony, disconnection in what should be your most nourishing relationships, or a forced happiness that prevents genuine emotional honesty.',
      love: 'The appearance of harmony in a romantic relationship may be masking genuine disconnection. The reversed Ten of Cups asks whether the love between you is real and reciprocal or primarily a performance of what a happy relationship should look like.',
      career: 'An emotionally disconnected work environment — one that looks good on paper but fails to nourish you in any genuine way — is leaving you hollow. The reversed Ten of Cups asks what genuine professional fulfillment would actually look like.',
      money: 'Financial prosperity is not delivering the family harmony and emotional security you hoped it would. The reversed Ten of Cups asks you to look at the emotional dynamics beneath your financial life.',
      relationships: 'Family dysfunction or disconnection from your most important relational circle is creating pain. The reversed Ten of Cups asks whether the surface harmony being maintained is helping or actually preventing genuine healing.',
      growth: 'You are performing happiness rather than inhabiting it. The reversed Ten of Cups asks you to be honest with yourself about what is truly working in your emotional life, and to stop maintaining a facade that costs more than it gives.'
    }
  },
  {
    id: 'cups-11-page',
    name: 'Page of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 11,
    symbol: '◡',
    uprightKeywords: ['creative sensitivity', 'intuitive messages', 'curiosity', 'emotional openness', 'imagination'],
    reversedKeywords: ['emotional immaturity', 'escapism', 'moodiness', 'unrealistic', 'overly sensitive'],
    upright: {
      general: 'The Page of Cups arrives with an open, curious heart — a gentle dreamer who receives intuitive messages from unexpected sources and approaches the world with the wondering eyes of an artist or mystic.',
      love: 'A sweet, sensitive romantic energy is arriving — tender gestures, heartfelt messages, and the shy but genuine expression of deep feeling. This is the beginning of love\'s most tender and innocent chapter.',
      career: 'Creative and intuitive messages are arriving with the potential to refresh your professional approach. The Page of Cups encourages you to follow inspired hunches and bring artistic sensitivity to your work.',
      money: 'An intuitive message or unexpected opportunity related to finances is arriving. The Page of Cups asks you to be open to unconventional income sources and to trust your gut about financial opportunities.',
      relationships: 'A new, gentle, emotionally open connection is forming. The Page of Cups brings sensitivity and genuine curiosity about the inner world of others — a friend or partner who truly listens and truly feels.',
      growth: 'Your growth right now is fueled by emotional and creative openness — following the whispers of intuition, allowing yourself to be moved by beauty, and staying curious about the mysterious inner world.'
    },
    reversed: {
      general: 'The sensitivity of the Page has curdled into escapism, moodiness, or emotional immaturity — retreating into fantasy rather than engaging with the genuine emotional realities of life.',
      love: 'Emotional immaturity or overly idealistic romantic fantasies are preventing genuine connection. The reversed Page of Cups asks for a more grounded approach to love — one that can meet the reality of another person.',
      career: 'Creative hypersensitivity or an inability to handle professional feedback is limiting your growth. The reversed Page of Cups asks you to develop the emotional resilience to receive input without feeling attacked.',
      money: 'Emotional avoidance is affecting your financial decision-making — you may be making impractical choices based on wishful thinking or avoiding difficult financial realities by escaping into fantasy.',
      relationships: 'Moodiness, hypersensitivity, or emotional withdrawal are creating strain in your connections. The reversed Page of Cups asks you to develop the emotional vocabulary and maturity to express what you feel more constructively.',
      growth: 'You may be escaping into creative or emotional fantasy rather than doing the genuine inner work being asked of you. The reversed Page of Cups asks you to bring your beautiful sensitivity into contact with real emotional growth.'
    }
  },
  {
    id: 'cups-12-knight',
    name: 'Knight of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 12,
    symbol: '◡',
    uprightKeywords: ['romance', 'charm', 'imagination', 'idealism', 'following the heart'],
    reversedKeywords: ['moodiness', 'unrealistic', 'emotional manipulation', 'disappearing', 'disappointment'],
    upright: {
      general: 'The Knight of Cups rides in on a wave of romantic idealism — charming, poetic, and guided entirely by the heart. This is the archetype of the lover, the artist, and the dreamer who follows beauty above all.',
      love: 'A romantic proposal, a heartfelt declaration, or the arrival of someone who embodies your romantic ideal is signaled. The Knight of Cups brings genuine emotional depth and a capacity for extraordinary tenderness.',
      career: 'You are being called to follow your heart in your professional life — to pursue work that genuinely moves you, to lead with creative vision, and to let your passion for the work speak louder than practical calculation.',
      money: 'Financial decisions guided by emotional resonance rather than pure logic may serve you well right now. The Knight of Cups asks you to consider whether your financial choices reflect what you truly value.',
      relationships: 'Someone with deep emotional intelligence, genuine charm, and a romantic soul is entering your life. The Knight of Cups brings the gift of being truly seen and poetically understood.',
      growth: 'Your growth is guided by following what moves you most deeply. The Knight of Cups asks you to trust your heart as a compass and to allow emotional truth to lead you toward your next right step.'
    },
    reversed: {
      general: 'The romantic charm of the Knight has curdled into emotional manipulation, moodiness, or a tendency to disappear when the depth of real relationship becomes uncomfortable.',
      love: 'Someone who seemed like the romantic ideal may be revealing a more manipulative or emotionally unreliable side. The reversed Knight of Cups asks you to evaluate whether the charm is backed by genuine character.',
      career: 'Unrealistic idealism about what your work should be is preventing you from engaging productively with the reality of your actual professional situation. Ground your creative dreams in practical action.',
      money: 'Emotional decision-making about finances — letting feelings override logic, making sentimental rather than practical choices — is creating financial instability. Develop a more balanced approach.',
      relationships: 'Emotional manipulation or a tendency to withdraw when things get real is undermining trust in a close relationship. The reversed Knight of Cups asks for the emotional courage to stay present even when vulnerability is uncomfortable.',
      growth: 'You may be using romantic idealism as a way to avoid commitment to the actual work of growth. The reversed Knight of Cups asks you to bring your beautiful emotional intelligence down from the clouds and apply it to real, present-moment relationship.'
    }
  },
  {
    id: 'cups-13-queen',
    name: 'Queen of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 13,
    symbol: '◡',
    uprightKeywords: ['compassion', 'calm', 'emotional intelligence', 'intuition', 'nurturing'],
    reversedKeywords: ['emotional insecurity', 'co-dependency', 'giving too much', 'martyrdom', 'overwhelm'],
    upright: {
      general: 'The Queen of Cups holds the world\'s deepest feelings with serene compassion — her emotional intelligence is extraordinary, her intuition is unfailingly accurate, and her capacity for love is vast and unconditional.',
      love: 'Profound emotional attunement and a deeply nurturing love are the hallmarks of this energy. The Queen of Cups in love brings a rare capacity to hold space for all of a partner\'s feelings without judgment or condition.',
      career: 'Your emotional intelligence, empathy, and intuitive capacity are your most powerful professional gifts right now. Fields involving care, creativity, counseling, or inspired artistry are especially favored.',
      money: 'Intuitive financial guidance combined with a generous spirit is your asset. The Queen of Cups manages money from a place of calm abundance — neither grasping nor reckless, but gracefully attuned to flow.',
      relationships: 'You are being called to bring your full compassionate presence to your most important relationships. The Queen of Cups models the kind of emotional availability that creates true safety and genuine intimacy.',
      growth: 'Your growth right now comes through deepening your emotional wisdom — learning to feel without being overwhelmed, to empathize without losing yourself, and to trust your intuition as a sacred guide.'
    },
    reversed: {
      general: 'The Queen\'s vast emotional ocean has become overwhelming — co-dependency, emotional martyrdom, an inability to maintain boundaries, or using emotional sensitivity as a means of manipulation.',
      love: 'You may be losing yourself in a relationship — giving so much emotionally that there is nothing left of your own inner world. The reversed Queen of Cups asks you to establish gentle but firm emotional boundaries.',
      career: 'Emotional overwhelm or an inability to separate your feelings from your professional responsibilities is affecting the quality of your work. The reversed Queen of Cups asks for the development of compassionate professional boundaries.',
      money: 'Emotional spending, financial generosity that crosses into self-sacrifice, or money decisions driven by fear rather than abundance thinking are creating instability.',
      relationships: 'Co-dependency or emotional manipulation may be operating in a key relationship. The reversed Queen of Cups asks you to examine whether the nurturing you offer is coming from genuine love or from a fear of being abandoned.',
      growth: 'Your sensitivity, without adequate boundaries and grounding, is leaving you overwhelmed and depleted. The reversed Queen of Cups asks you to build the container strong enough to hold your vast emotional gifts without being destroyed by them.'
    }
  },
  {
    id: 'cups-14-king',
    name: 'King of Cups',
    arcana: 'minor',
    suit: 'cups',
    number: 14,
    symbol: '◡',
    uprightKeywords: ['emotional maturity', 'compassion', 'calm mastery', 'generosity', 'diplomacy'],
    reversedKeywords: ['emotional manipulation', 'moodiness', 'volatility', 'repressed feelings', 'coldness'],
    upright: {
      general: 'The King of Cups has mastered the seas of emotion — he feels everything deeply yet remains centered and wise, offering compassion and guidance from a place of profound equanimity and emotional maturity.',
      love: 'A partner of extraordinary emotional depth and stability is present or approaching. The King of Cups in love offers the rare gift of someone who can be fully emotionally present without being overwhelmed or manipulative.',
      career: 'You are leading from the heart with masterful calm. The King of Cups is the emotionally intelligent leader — inspiring through compassion, making decisions from both logic and feeling, and creating psychological safety for their team.',
      money: 'Financial decisions made with both emotional intelligence and measured wisdom are favored. The King of Cups manages money from a place of generous stability — comfortable with abundance, unafraid of generosity.',
      relationships: 'You bring the gift of profound emotional maturity to your relationships — the ability to hold space without judgment, to respond rather than react, and to offer genuine care without expectations.',
      growth: 'The King of Cups represents the fullest flowering of emotional mastery — not the suppression of feeling, but the wise governance of it. Your growth now lies in deepening this integration of heart and sovereignty.'
    },
    reversed: {
      general: 'Emotional mastery has broken down — either through volatile emotional outbursts, manipulative use of emotional intelligence, or the cold withdrawal of a heart that has closed to protect itself.',
      love: 'Emotional volatility, cold withdrawal, or subtle manipulation is poisoning a romantic connection. The reversed King of Cups asks whether the emotional maturity you present is genuine or a carefully maintained facade.',
      career: 'A leader who uses emotional intelligence manipulatively — playing favorites, weaponizing empathy, creating dependency — is creating a toxic environment. If this is you, examine the shadow beneath your empathy.',
      money: 'Emotional volatility is driving poor financial decisions — impulsive spending when upset, financial withdrawal when things feel out of control. Develop the King\'s equanimity as a foundation for sound financial governance.',
      relationships: 'Emotional manipulation — using others\' feelings against them, withholding affection as punishment, or creating emotional dependency — is indicated. The reversed King of Cups asks for radical emotional honesty.',
      growth: 'You have the capacity for emotional mastery but are not yet living it consistently. The reversed King of Cups asks you to examine the places where your emotional governance breaks down and to begin the patient work of genuine integration.'
    }
  },
  // ── SWORDS ─────────────────────────────────────────────────────────────
  {
    id: 'swords-1-ace',
    name: 'Ace of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 1,
    symbol: '△',
    uprightKeywords: ['clarity', 'breakthrough', 'truth', 'new perspective', 'mental force'],
    reversedKeywords: ['confusion', 'mental fog', 'miscommunication', 'chaos', 'false truth'],
    upright: {
      general: 'The Ace of Swords cuts through with brilliant, uncompromising clarity — a moment of absolute mental breakthrough where the truth is suddenly, unmistakably visible. Use this keen awareness with both courage and care.',
      love: 'Clarity is arriving in your love life — either a breakthrough of honest communication, the truth of a situation becoming clear, or the courage to say what has long needed to be said.',
      career: 'A sudden burst of mental clarity is cutting through professional confusion. The Ace of Swords brings the decisive thinking needed to make a breakthrough — trust your intellectual power and speak with authority.',
      money: 'Sharp financial thinking is your greatest asset right now. The Ace of Swords invites clear-eyed analysis of your financial situation — cut through wishful thinking and see the numbers for exactly what they are.',
      relationships: 'An honest, potentially difficult conversation is creating the clarity that a relationship needs. The Ace of Swords honors the courage to speak truth even when it is uncomfortable, knowing that clarity is ultimately a gift.',
      growth: 'A mental breakthrough is reshaping your understanding of yourself and your life. The Ace of Swords cuts away the stories and illusions that were obscuring your truth, leaving you with sharp, unadorned clarity.'
    },
    reversed: {
      general: 'Mental clarity has given way to confusion — the sword cuts in the wrong direction, creating chaos rather than clarity. Miscommunication, clouded thinking, or false information is distorting your perception.',
      love: 'Miscommunication or the unwillingness to speak difficult truths is creating confusion in a romantic relationship. The reversed Ace of Swords asks you to find the courage for honest conversation before confusion becomes crisis.',
      career: 'Mental fog or poor communication is undermining your professional effectiveness. The reversed Ace of Swords asks you to clarify your thinking before acting — unclear plans executed boldly create unnecessary messes.',
      money: 'Unclear financial information or your own confused thinking about money is leading to poor decisions. Seek expert counsel and take time to clarify the facts before committing to any significant financial move.',
      relationships: 'Words are being used as weapons rather than tools for understanding. The reversed Ace of Swords can indicate harsh, thoughtless communication that cuts deeper than intended and leaves lasting damage.',
      growth: 'Your thinking is muddled right now, making it difficult to see your own patterns clearly. The reversed Ace of Swords asks you to slow down, seek genuine clarity, and resist acting on partial or distorted information.'
    }
  },
  {
    id: 'swords-2',
    name: 'Two of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 2,
    symbol: '△',
    uprightKeywords: ['stalemate', 'avoidance', 'difficult decision', 'blindfolded', 'truce'],
    reversedKeywords: ['indecision', 'information overload', 'confusion', 'choosing', 'conflict'],
    upright: {
      general: 'The Two of Swords shows you blindfolded with swords crossed over your heart — deliberately keeping yourself in the dark, maintaining a tense stalemate rather than making the difficult decision that awaits.',
      love: 'You are avoiding a difficult truth or decision in your love life. The Two of Swords signals that keeping yourself willfully blind to what is right in front of you is more painful than the clarity you fear.',
      career: 'A professional impasse has you frozen between two directions. The Two of Swords asks you to remove the blindfold — gather the information you\'ve been avoiding and make the decision that has been waiting.',
      money: 'You may be avoiding looking at your finances directly — keeping yourself in the dark because the truth feels too uncomfortable. The Two of Swords asks for the courage to see your situation clearly.',
      relationships: 'An unresolved tension between you and another person is being maintained through mutual avoidance. The Two of Swords asks what both parties are afraid to say, and what it would take to finally say it.',
      growth: 'Growth requires the willingness to remove the blindfold and see your situation clearly, however uncomfortable the view. The Two of Swords marks the moment before the choice — the choice itself, however difficult, will bring relief.'
    },
    reversed: {
      general: 'The stalemate is breaking — either you are finally making the decision you\'ve been avoiding, or the conflict that was suppressed is erupting in ways that can no longer be managed by avoidance.',
      love: 'A romantic standoff is breaking open — either through courageous communication, a forced confrontation, or simply the natural collapse of a stalemate that could no longer be maintained.',
      career: 'A professional decision that has been agonized over is finally being made. The reversed Two of Swords brings the relief of movement after paralysis — even an imperfect decision made with honest intention is better than continued stasis.',
      money: 'The financial information you\'ve been avoiding is finally being confronted. The reversed Two of Swords brings the difficult clarity of seeing your situation exactly as it is — and the freedom that comes with that seeing.',
      relationships: 'A suppressed conflict is rising to the surface. The reversed Two of Swords can indicate that the tension that was held at stalemate is now demanding resolution through honest, direct engagement.',
      growth: 'The blindfold is coming off. The reversed Two of Swords marks the end of willful avoidance and the beginning of the honest, sometimes painful engagement with reality that genuine growth requires.'
    }
  },
  {
    id: 'swords-3',
    name: 'Three of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 3,
    symbol: '△',
    uprightKeywords: ['heartbreak', 'grief', 'sorrow', 'painful truth', 'betrayal'],
    reversedKeywords: ['healing', 'releasing grief', 'forgiveness', 'moving on', 'recovery'],
    upright: {
      general: 'The Three of Swords is the image of heartbreak itself — three swords piercing a heart in the rain. Pain is real here, and it deserves to be fully acknowledged rather than minimized or rushed through.',
      love: 'Heartbreak, betrayal, or a painful truth about a relationship is at the heart of this moment. The Three of Swords does not promise easy comfort — only that the pain you are feeling is real and worthy of grief.',
      career: 'A professional betrayal, a painful rejection, or a devastating disappointment is requiring genuine grief. The Three of Swords asks you not to rush past this pain but to honor what it cost you.',
      money: 'Financial pain — a significant loss, a betrayal of trust in a financial partnership, or a dream shattered by hard numbers — needs to be genuinely mourned before you can rebuild.',
      relationships: 'A deep wound has been inflicted in an important relationship — through betrayal, harsh words, or a truth that changed everything. The Three of Swords asks you to grieve this without pretending it didn\'t happen.',
      growth: 'Grief, honestly felt and fully honored, is one of the most profound teachers. The Three of Swords asks you to allow your heart to break open — and to trust that a broken-open heart has more capacity than an armored one.'
    },
    reversed: {
      general: 'The worst of the grief has passed and healing is beginning. The reversed Three of Swords carries the energy of a heart slowly reassembling itself — still tender, but no longer in acute crisis.',
      love: 'Heartbreak is softening into healing. You are not over the pain, but you are beginning to release the sharpest grief and to believe again in the possibility of love.',
      career: 'Professional wounds are beginning to heal. The reversed Three of Swords brings the first signs of recovery after a painful disappointment — the ability to begin imagining a future beyond the hurt.',
      money: 'Financial losses are beginning to be integrated. The reversed Three of Swords signals that the acute grief of a financial blow is easing, and a more constructive relationship with what remains is becoming possible.',
      relationships: 'Forgiveness and healing are beginning their quiet work in a relationship that was deeply wounded. The reversed Three of Swords asks you to allow this process to unfold at its own pace — healing cannot be forced.',
      growth: 'You are integrating a painful experience into genuine wisdom. The reversed Three of Swords marks the beginning of the long, tender work of turning heartbreak into a more spacious and compassionate heart.'
    }
  },
  {
    id: 'swords-4',
    name: 'Four of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 4,
    symbol: '△',
    uprightKeywords: ['rest', 'recovery', 'contemplation', 'sanctuary', 'recuperation'],
    reversedKeywords: ['restlessness', 'burnout', 'stagnation', 're-entering the world', 'recovery blocked'],
    upright: {
      general: 'The Four of Swords commands rest — a necessary pause for recovery, integration, and the gathering of inner resources before re-engagement. This is sacred rest, not laziness, and it is doing essential work.',
      love: 'A pause in romantic activity is healthy and needed. The Four of Swords asks you to allow yourself — or a relationship — to simply breathe and restore before pushing forward.',
      career: 'Your body, mind, and spirit are signaling a need for genuine rest from professional demands. The Four of Swords is explicit: push through this signal and you will pay a greater cost later. Rest now is an investment.',
      money: 'A period of financial consolidation — holding steady rather than expanding or contracting — is the wisest approach right now. Let your financial strategy rest and recover rather than making moves from a depleted state.',
      relationships: 'Space and quiet time within a relationship is healthy and necessary. The Four of Swords invites both parties in a close connection to honor the need for individual solitude and replenishment.',
      growth: 'Growth happens not only in action but in rest and integration. The Four of Swords asks you to trust that the pause you are taking is doing invisible but essential work, preparing you for the next phase of development.'
    },
    reversed: {
      general: 'The rest period is ending — you are re-emerging into activity, either because you are genuinely recovered or because restlessness is driving you back before you are truly ready.',
      love: 'You are ready to re-engage with romantic life after a period of recovery. The reversed Four of Swords asks you to enter this new chapter with the greater wisdom and restored openness that your time of rest has provided.',
      career: 'The enforced pause is ending and you are ready to return to professional engagement. The reversed Four of Swords can also indicate that restlessness or burnout is making genuine rest impossible — if so, address this.',
      money: 'You are ready to begin moving again financially after a period of consolidation. Or you are attempting to re-engage financially before you have truly recovered from a previous depletion — assess honestly which is true.',
      relationships: 'A period of individual restoration has equipped you to return to your relationships with more presence and capacity. The reversed Four of Swords marks the end of necessary withdrawal and the beginning of re-engagement.',
      growth: 'You are emerging from a recuperative period ready to apply the insights and renewed energy that genuine rest has provided. The reversed Four of Swords is the moment of re-awakening — carry the stillness with you as you move.'
    }
  },
  {
    id: 'swords-5',
    name: 'Five of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 5,
    symbol: '△',
    uprightKeywords: ['conflict', 'defeat', 'hollow victory', 'betrayal', 'win at all costs'],
    reversedKeywords: ['reconciliation', 'past conflict', 'releasing tension', 'forgiveness', 'moving on'],
    upright: {
      general: 'The Five of Swords shows a hollow victory — one side wins but everyone loses something in the process. The battle has been costly, and the question is whether winning was worth the damage done to trust and relationship.',
      love: 'Conflict in a relationship has left someone — or both people — feeling defeated and diminished. The Five of Swords asks whether you are fighting to win or fighting to be understood, and whether the battle is actually necessary.',
      career: 'A cutthroat workplace dynamic or a battle for position that has cost more than it gained is indicated. The Five of Swords asks whether the victory you are pursuing is worth the professional relationships you are sacrificing.',
      money: 'A financial conflict or a win achieved through questionable means may leave you with more money but less integrity. The Five of Swords asks whether your financial tactics are aligned with your values.',
      relationships: 'A conflict where someone felt humiliated or defeated has left lasting damage. The Five of Swords asks whether this battle was necessary and whether repair is possible — and what it would require from both parties.',
      growth: 'The Five of Swords asks a hard question: are you fighting for growth, or fighting for ego? True development requires the wisdom to know which battles serve your evolution and the maturity to walk away from the ones that don\'t.'
    },
    reversed: {
      general: 'The aftermath of a damaging conflict — the work of reconciliation, forgiveness, and releasing the bitter aftertaste of a battle that cost everyone something.',
      love: 'A period of conflict in a relationship is ending and the possibility of genuine reconciliation is opening. The reversed Five of Swords asks whether both parties are willing to put down their weapons and truly forgive.',
      career: 'A difficult period of professional conflict is winding down. The reversed Five of Swords brings the possibility of reconciliation with a colleague or moving past a bitter battle to find more constructive ways of working.',
      money: 'Financial conflicts and disputes are finding resolution. The reversed Five of Swords can indicate the end of a contentious financial disagreement and the beginning of a more cooperative arrangement.',
      relationships: 'Forgiveness is becoming possible in the wake of a painful conflict. The reversed Five of Swords asks you to release the need to be right and to prioritize the health of the relationship over the satisfaction of winning.',
      growth: 'You are releasing the need to fight every battle and learning to discern more wisely between conflicts worth engaging and those better left behind. This discernment is a genuine mark of maturity.'
    }
  },
  {
    id: 'swords-6',
    name: 'Six of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 6,
    symbol: '△',
    uprightKeywords: ['transition', 'change', 'moving forward', 'peace', 'slow progress'],
    reversedKeywords: ['resistance to change', 'unfinished business', 'rough waters', 'returning', 'delayed'],
    upright: {
      general: 'The Six of Swords carries you away from troubled waters toward calmer shores. The journey is not triumphant — there is grief in leaving — but the direction is right, and the waters ahead are noticeably smoother.',
      love: 'You are leaving a difficult period in your love life behind and moving toward greater peace. The transition may be melancholy — you are carrying the weight of what was — but the movement itself is healing.',
      career: 'A difficult professional period is ending. You are moving away from conflict, stress, or an unhealthy situation toward calmer professional waters — trust the direction even if the pace feels slow.',
      money: 'Financial turbulence is easing. You are moving away from a period of financial stress toward greater stability — the transition is gradual, but the trajectory is clearly toward calmer financial ground.',
      relationships: 'You are moving a relationship out of troubled territory and into a more peaceful phase. The Six of Swords asks you to carry forward only what is truly worth keeping and leave the rest on the shore you are departing.',
      growth: 'Growth is happening through the act of moving on — releasing what no longer serves you and accepting the melancholy of leaving behind what was once familiar. The calmer waters ahead are real.'
    },
    reversed: {
      general: 'You are struggling to make the transition — either pulled back by unfinished business, resistance to necessary change, or rough unexpected waters making the crossing harder than anticipated.',
      love: 'A romantic transition is being blocked — either by your own reluctance to leave, by circumstances pulling you back, or by unresolved issues that must be addressed before a clean departure is possible.',
      career: 'You are trying to move on from a difficult professional situation but finding the transition harder than expected. The reversed Six of Swords asks what unfinished business is holding you in place.',
      money: 'The financial transition you are attempting is meeting more resistance than expected. Examine whether there are elements of your financial situation that need to be addressed before you can truly move forward.',
      relationships: 'You are unable to fully leave a difficult relational phase behind — either pulled back by nostalgia, obligation, or unresolved conflict. The reversed Six of Swords asks what it would take to truly move on.',
      growth: 'Resistance to necessary change is keeping you in troubled waters longer than necessary. The reversed Six of Swords asks you to identify what you are holding onto that is preventing you from crossing toward the calmer life that awaits.'
    }
  },
  {
    id: 'swords-7',
    name: 'Seven of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 7,
    symbol: '△',
    uprightKeywords: ['deception', 'strategy', 'cunning', 'stealth', 'getting away with it'],
    reversedKeywords: ['coming clean', 'recklessness', 'caught out', 'conscience', 'exposure'],
    upright: {
      general: 'The Seven of Swords moves in shadow — deception, strategic manipulation, or a clever evasion of a situation that should be faced directly. Someone is getting away with something, but the reckoning will come.',
      love: 'Deception or dishonesty is present in a romantic situation — either someone is not being fully truthful, or you are withholding important information from a partner. The foundation of trust is being eroded.',
      career: 'Someone at work may be operating with a hidden agenda — taking credit, sharing confidential information, or advancing themselves through deception. Protect your ideas and trust your instincts about who is acting with integrity.',
      money: 'Financial deception is indicated — either you are being misled about an investment or deal, or you are engaging in financial practices that don\'t fully align with your integrity. Address this before it compounds.',
      relationships: 'A hidden agenda or a lack of full transparency is undermining trust in an important relationship. The Seven of Swords asks for the courage to bring what has been hidden into the open.',
      growth: 'Are you deceiving yourself about something? The Seven of Swords can point to the stories we tell ourselves to avoid uncomfortable truths. True growth requires the courage to face yourself with complete honesty.'
    },
    reversed: {
      general: 'What was hidden is being revealed — either through a guilty conscience compelling confession, or through the inevitable exposure of a deception that could not be sustained indefinitely.',
      love: 'A secret or deception in a romantic relationship is being brought to light. The reversed Seven of Swords can indicate a confession, a discovery, or the moment of reckoning that follows a period of dishonesty.',
      career: 'Deceptive practices at work are being exposed. The reversed Seven of Swords signals that what was done in shadow is about to come into the light — and the consequences will be significant.',
      money: 'Financial deception — either directed at you or perpetrated by you — is coming to light. The reversed Seven of Swords asks you to get ahead of this exposure by being the one who initiates transparency.',
      relationships: 'The truth is finally emerging in a relationship that has been marked by hidden agendas. The reversed Seven of Swords can indicate the difficult but ultimately liberating moment of complete honesty.',
      growth: 'The self-deceptions you have been running are losing their power. The reversed Seven of Swords marks the moment of genuine self-confrontation — when you see yourself clearly and can no longer hide from what you find.'
    }
  },
  {
    id: 'swords-8',
    name: 'Eight of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 8,
    symbol: '△',
    uprightKeywords: ['restriction', 'imprisonment', 'powerlessness', 'self-limitation', 'victim mentality'],
    reversedKeywords: ['freedom', 'release', 'escaping restrictions', 'empowerment', 'clarity'],
    upright: {
      general: 'The Eight of Swords shows you bound and blindfolded, surrounded by swords — yet the bonds are loosely tied and the swords do not actually touch you. The prison is primarily mental; the door is open if you choose to see it.',
      love: 'You feel trapped in a romantic situation, yet the constraints may be more mental than real. The Eight of Swords asks whether the limitations you perceive in your love life are actual obstacles or the product of fearful thinking.',
      career: 'You feel helplessly stuck in a professional situation, yet your perceived powerlessness may be greater than your actual constraint. What small action — however imperfect — would constitute a step toward freedom?',
      money: 'Financial limitations feel overwhelming and inescapable, yet the Eight of Swords asks you to look for the looseness in the bonds — the options you haven\'t yet considered because you\'ve been focused on the bars of your cage.',
      relationships: 'You feel powerless in a relationship dynamic, yet you may have more agency than you believe. The Eight of Swords asks you to identify one small way you could assert your needs or shift the dynamic.',
      growth: 'The Eight of Swords is the card of the self-imposed prison. Your greatest growth right now comes from examining the limiting beliefs that are making your world feel smaller than it truly is — and then choosing to step beyond them.'
    },
    reversed: {
      general: 'The blindfold is coming off and the bindings are loosening — you are beginning to see and act your way out of a mental prison that has constrained you for too long. Freedom is within reach.',
      love: 'You are releasing the fearful beliefs about love that have kept you stuck. The reversed Eight of Swords brings the courage to remove your blindfold and step toward the romantic life you truly want.',
      career: 'Professional freedom is within reach as the mental constraints that kept you feeling powerless begin to dissolve. You are discovering that you have more options and more agency than you allowed yourself to see.',
      money: 'Financial freedom is possible as you begin to challenge the limiting beliefs about money that have kept you feeling trapped. The reversed Eight of Swords brings the clarity to see your options and the courage to act on them.',
      relationships: 'You are reclaiming your voice and your agency in relationships where you previously felt helpless. The reversed Eight of Swords marks the beginning of genuine empowerment — the ability to choose your terms.',
      growth: 'The mental prison is dissolving. You are claiming the freedom that was always technically yours — and discovering that the world outside your self-imposed limits is more spacious and welcoming than you feared.'
    }
  },
  {
    id: 'swords-9',
    name: 'Nine of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 9,
    symbol: '△',
    uprightKeywords: ['anxiety', 'nightmares', 'despair', 'worry', 'dark night of the soul'],
    reversedKeywords: ['hope', 'reaching out', 'releasing anxiety', 'inner turmoil', 'recovering'],
    upright: {
      general: 'The Nine of Swords sits upright in the dark, overwhelmed by a cascade of anxious thoughts. The fears that torment you in the small hours are real, but they are also distorted by the darkness — daylight brings a different perspective.',
      love: 'Anxiety about a romantic relationship — fear of abandonment, of not being enough, of the worst-case scenario — is making it hard to be present with what is actually real and available in your love life.',
      career: 'Worry and catastrophic thinking about your professional situation are creating more suffering than the situation itself warrants. The Nine of Swords asks you to distinguish between genuine concern and anxiety amplified by exhaustion.',
      money: 'Financial anxiety is at a high point — fears about money, security, and the future are keeping you up at night. While financial concerns deserve attention, the Nine of Swords asks whether your worry is proportionate to reality.',
      relationships: 'You may be tormenting yourself with fears about what people think of you, about betrayal, or about the worst-case outcomes in your closest connections. Reach out for support rather than suffering alone.',
      growth: 'The Nine of Swords marks the dark night of the soul — a period of acute inner suffering that, if met with compassion and courage, can become the very threshold of transformation. You will not be here forever.'
    },
    reversed: {
      general: 'The acute phase of anxiety is softening. You are beginning to emerge from the darkest point — either through conscious effort, external support, or the natural dissipation of a fear spiral that has exhausted itself.',
      love: 'Anxiety about love is beginning to ease. You are regaining perspective on what is actually happening in a romantic relationship, rather than what your fear insists is happening.',
      career: 'Professional anxiety and catastrophic thinking are losing their hold. You are beginning to see your work situation more clearly and to believe that you can navigate the challenges it presents.',
      money: 'The acute financial anxiety that has been tormenting you is beginning to lift. The reversed Nine of Swords brings the beginning of a more balanced perspective on your financial situation.',
      relationships: 'You are reaching out for support rather than suffering your relational anxieties in isolation. This reaching out is itself a sign of recovery — the reversed Nine of Swords honors the courage it takes to ask for help.',
      growth: 'You are emerging from the darkest point of a mental and emotional trial with greater depth and compassion — both for yourself and for others who suffer. The dark night is not yet over, but dawn is becoming visible.'
    }
  },
  {
    id: 'swords-10',
    name: 'Ten of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 10,
    symbol: '△',
    uprightKeywords: ['rock bottom', 'endings', 'defeat', 'crisis', 'betrayal'],
    reversedKeywords: ['survival', 'recovery', 'regeneration', 'resistance to ending', 'relapse'],
    upright: {
      general: 'The Ten of Swords marks an absolute ending — a complete collapse that, while devastating, is also unambiguous. You have hit rock bottom, and while this is painful, it also means the only direction from here is up.',
      love: 'A romantic situation has reached its absolute end. The Ten of Swords marks a definitive conclusion — a betrayal, a final breakup, or the total collapse of a relationship that cannot be recovered. Grieve and release.',
      career: 'A professional situation has ended completely and painfully — a job loss, a failed venture, or a decisive professional defeat. The Ten of Swords marks the end, and while it is painful, it also clears the ground for what comes next.',
      money: 'A financial collapse — bankruptcy, a devastating loss, or the complete failure of a financial plan — is marked by this card. The Ten of Swords asks you to face the full extent of the damage before you can begin to rebuild.',
      relationships: 'A relationship has ended in a deeply painful way — through betrayal, abandonment, or a crisis that has completely severed what once existed. Honor the enormity of this loss before moving forward.',
      growth: 'Rock bottom is also a solid foundation. The Ten of Swords marks the end of a cycle with brutal finality — but it also marks the beginning of a genuine rebuilding, because there is nothing left to lose.'
    },
    reversed: {
      general: 'The worst is over and survival is real. The reversed Ten of Swords carries you past the lowest point toward the first, fragile signs of recovery — the light is genuinely beginning to return.',
      love: 'You are surviving a devastating romantic ending and beginning to discover that life continues beyond the loss. The reversed Ten of Swords brings the first tentative signs of healing after what felt unsurvivable.',
      career: 'You are recovering from a professional catastrophe and discovering that you are more resilient than you knew. The reversed Ten of Swords marks the beginning of the climb back up from rock bottom.',
      money: 'The worst of a financial collapse has passed and rebuilding is beginning. The reversed Ten of Swords brings the dawning recognition that the situation, while still difficult, is no longer as catastrophic as it was.',
      relationships: 'Survival of a devastating relational wound is real and deserves acknowledgment. The reversed Ten of Swords can also indicate a refusal to accept that something has truly ended — holding onto what is already gone.',
      growth: 'You have survived what you feared would destroy you. The reversed Ten of Swords asks you to acknowledge your extraordinary resilience and to begin the slow, patient work of rebuilding from the bedrock of who you have proven yourself to be.'
    }
  },
  {
    id: 'swords-11-page',
    name: 'Page of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 11,
    symbol: '△',
    uprightKeywords: ['curious', 'communicative', 'alert', 'talkative', 'witty'],
    reversedKeywords: ['gossip', 'haste', 'hasty decisions', 'deception', 'all talk'],
    upright: {
      general: 'The Page of Swords is the quick-minded, alert young messenger — cutting through with wit, curiosity, and a sharp eye for truth. This is a time for gathering information, asking questions, and staying mentally agile.',
      love: 'Lively, intellectually stimulating romantic energy is arriving. The Page of Swords in love brings a connection that sharpens your thinking and keeps you on your toes — someone who challenges and delights you in equal measure.',
      career: 'A sharp, curious, and communicative energy is serving your professional development. This is the time to gather information, ask the difficult questions, and approach problems with the nimble thinking of a beginner.',
      money: 'Careful research and sharp questioning before any financial commitment is strongly advised. The Page of Swords brings the mental agility to spot what others miss — use this gift to investigate financial opportunities thoroughly.',
      relationships: 'New connections formed now are marked by intellectual chemistry and honest, sometimes blunt communication. The Page of Swords brings relationships that challenge you to think more clearly about yourself.',
      growth: 'Your growth is being fueled by curiosity and a willingness to question everything — including your most cherished assumptions. The Page of Swords invites you to stay sharp, stay curious, and never stop asking why.'
    },
    reversed: {
      general: 'Mental sharpness has tipped into gossip, hasty conclusions, or talk without substance. The reversed Page of Swords warns against acting on incomplete information or using mental quickness as a weapon against others.',
      love: 'Sharp words or a tendency to intellectualize rather than feel may be creating distance in a romantic connection. The reversed Page of Swords asks you to balance your mental quickness with emotional sensitivity.',
      career: 'Hasty communication, spreading unverified information, or acting before fully thinking things through is creating professional complications. Slow down and verify before you speak or act.',
      money: 'Acting on incomplete or unverified financial information is the primary risk here. The reversed Page of Swords asks you to do your full due diligence rather than rushing ahead on the basis of a clever hunch.',
      relationships: 'Gossip, careless communication, or a tendency to say more than is wise is damaging your relational reputation. The reversed Page of Swords asks you to develop discretion alongside your natural verbal acuity.',
      growth: 'All talk and no follow-through is the shadow of the Page of Swords. Your growth requires that you back up your brilliant ideas with actual action — the real test of intelligence is not what you say, but what you do.'
    }
  },
  {
    id: 'swords-12-knight',
    name: 'Knight of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 12,
    symbol: '△',
    uprightKeywords: ['ambitious', 'action-oriented', 'driven', 'assertive', 'focused'],
    reversedKeywords: ['tactless', 'all talk', 'reckless', 'destructive', 'missing facts'],
    upright: {
      general: 'The Knight of Swords charges forward at full speed — decisive, ambitious, and intellectually ruthless. This is the energy of someone who sees a problem and solves it, who sees an obstacle and vaults it.',
      love: 'A direct, assertive romantic energy is entering your life. The Knight of Swords in love does not play games — they say what they mean and mean what they say, moving toward what they want without hesitation.',
      career: 'Your decisive, ambitious energy is your greatest professional asset right now. The Knight of Swords rewards bold, direct action — identify your target and move toward it with the full force of your intelligence and will.',
      money: 'Direct, decisive financial action is called for. The Knight of Swords cuts through financial indecision and moves quickly on opportunities that less decisive people would overthink — but ensure your speed is matched by adequate information.',
      relationships: 'Your direct, honest communication style is clarifying and refreshing in your relationships — as long as tact and emotional sensitivity are also present. The Knight of Swords can cut when it means to clarify.',
      growth: 'Your growth comes through decisive action aligned with your deepest convictions. The Knight of Swords asks you to stop overthinking and move — the path reveals itself to those who are willing to charge.'
    },
    reversed: {
      general: 'The Knight\'s velocity without direction has become destructive — reckless, tactless, and cutting indiscriminately through people and relationships in the pursuit of a goal that justifies nothing.',
      love: 'Tactless communication or a reckless disregard for a partner\'s feelings is creating damage. The reversed Knight of Swords asks you to bring some warmth and sensitivity to your honesty, or your directness becomes cruelty.',
      career: 'Charging ahead without adequate information or consideration for how your decisions affect others is creating professional friction. The reversed Knight of Swords asks you to pair your speed with greater discernment.',
      money: 'Reckless financial speed — making decisions before doing adequate research, acting on incomplete data — is creating unnecessary exposure. The reversed Knight of Swords asks for a moment of genuine due diligence.',
      relationships: 'A cutting, abrasive communication style or a reckless disregard for relational consequences is leaving a trail of damage. The reversed Knight of Swords asks you to wield your sharp mind with greater care and compassion.',
      growth: 'Recklessness disguised as decisiveness is your primary obstacle. The reversed Knight of Swords asks you to slow down long enough to ensure you are charging in the right direction, with the right information, at the right cost.'
    }
  },
  {
    id: 'swords-13-queen',
    name: 'Queen of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 13,
    symbol: '△',
    uprightKeywords: ['perceptive', 'independent', 'direct', 'clear-minded', 'fair'],
    reversedKeywords: ['cold', 'bitter', 'cruel', 'overly critical', 'manipulative'],
    upright: {
      general: 'The Queen of Swords sees through everything — her clear, compassionate perception cuts away pretense without malice. She knows the truth and communicates it with both honesty and grace.',
      love: 'A clear-eyed, direct approach to love is your greatest asset. The Queen of Swords doesn\'t tolerate pretense or drama — she knows what she wants and communicates it honestly, expecting the same clarity in return.',
      career: 'Your perceptive, sharp, and direct professional presence commands genuine respect. The Queen of Swords is the advisor you want in any challenging situation — she sees clearly, communicates honestly, and cuts through confusion.',
      money: 'Clear-headed, unsentimental financial analysis is your greatest asset. The Queen of Swords makes financial decisions based on facts and clear thinking rather than emotion or wishful thinking.',
      relationships: 'Your direct, honest communication style creates the kind of clarity that relationships genuinely need. The Queen of Swords is the friend who tells you the truth with love — and who you can fully trust to mean what they say.',
      growth: 'Your growth is guided by the ruthless kindness of true clarity. The Queen of Swords asks you to be as honest with yourself as you are capable of being — and to allow that clarity to guide your choices with both courage and compassion.'
    },
    reversed: {
      general: 'The Queen\'s clarity has curdled into coldness — bitterness born of old wounds expressing itself as sharp criticism, emotional cruelty, or a manipulative wielding of insight as a weapon.',
      love: 'Cold emotional withdrawal or bitter, cutting criticism is poisoning a romantic relationship. The reversed Queen of Swords asks whether the sharpness you are directing at a partner is really about the present, or about old wounds.',
      career: 'An overly critical, cold, or manipulative dynamic is creating toxicity at work. The reversed Queen of Swords asks you to examine whether your directness has crossed into cruelty, and whether your judgments are fair.',
      money: 'An overly cold, calculating approach to financial relationships — refusing to consider the human element — may be creating damage that the numbers don\'t reflect. Financial relationships have emotional dimensions too.',
      relationships: 'Old wounds are expressing themselves as bitter criticism, cold withdrawal, or a manipulative use of insight to hurt rather than help. The reversed Queen of Swords asks you to heal the source of the bitterness rather than wielding it against others.',
      growth: 'Bitterness and emotional coldness are blocking the growth that your formidable intelligence makes possible. The reversed Queen of Swords asks you to let the grief beneath the hardness be genuinely felt and genuinely healed.'
    }
  },
  {
    id: 'swords-14-king',
    name: 'King of Swords',
    arcana: 'minor',
    suit: 'swords',
    number: 14,
    symbol: '△',
    uprightKeywords: ['authority', 'truth', 'clarity', 'intellectual power', 'ethical'],
    reversedKeywords: ['manipulative', 'tyrannical', 'abusive', 'irrational', 'ruthless'],
    upright: {
      general: 'The King of Swords holds absolute intellectual authority — his mind is his most powerful instrument, and he uses it in service of truth, justice, and the greater good with calm, decisive mastery.',
      love: 'A partner of genuine intellectual depth, ethical integrity, and honest communication is present or approaching. The King of Swords in love brings a relationship built on truth, respect, and clear-eyed mutual understanding.',
      career: 'Intellectual authority and ethical leadership are your professional signature right now. The King of Swords leads through the clarity of their thinking, the integrity of their principles, and the precision of their communication.',
      money: 'Clear-eyed, strategically intelligent financial decision-making is your greatest asset. The King of Swords manages money with ethical precision and long-term thinking — neither impulsive nor sentimental.',
      relationships: 'You bring the gift of honest, incisive truth-telling to your relationships — always in service of genuine understanding rather than ego. The King of Swords is the person others come to when they need reality, not comfort.',
      growth: 'You have achieved a level of mental mastery that commands genuine respect. The King of Swords asks you to continue developing your intellectual authority in service of truth and ethical leadership, not personal power.'
    },
    reversed: {
      general: 'Intellectual power has become a weapon of manipulation and tyranny. The reversed King of Swords uses mental superiority to dominate, deceive, and rationalize cruelty as logic.',
      love: 'Intellectual domination, emotional manipulation through logic, or a cold disregard for a partner\'s feelings is creating profound damage. The reversed King of Swords asks whether your mental power is in service of love or control.',
      career: 'A tyrant leader who uses intelligence to manipulate rather than inspire is poisoning the professional environment. If this is you, examine whether your authority is truly serving the people you lead or simply your own position.',
      money: 'Ruthless financial manipulation — using intellectual superiority to take advantage of others in financial dealings — is indicated. The reversed King of Swords asks you to ensure that your financial intelligence is deployed with ethical integrity.',
      relationships: 'You are using your formidable mind to manipulate rather than to connect, to dominate rather than to understand. The reversed King of Swords asks you to examine the fear beneath the control and address it directly.',
      growth: 'Intellectual arrogance is your primary obstacle to growth. The reversed King of Swords asks you to consider that the greatest minds are also the most genuinely humble — and that the development of wisdom requires the willingness to be wrong.'
    }
  },
  // ── PENTACLES ──────────────────────────────────────────────────────────
  {
    id: 'pentacles-1-ace',
    name: 'Ace of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 1,
    symbol: '⬟',
    uprightKeywords: ['opportunity', 'prosperity', 'new beginnings', 'abundance', 'manifestation'],
    reversedKeywords: ['missed opportunity', 'scarcity', 'poor planning', 'financial loss', 'instability'],
    upright: {
      general: 'The Ace of Pentacles is the seed of material abundance — a golden coin offered from the universe, representing the beginning of a new era of prosperity, stability, and tangible manifestation.',
      love: 'A new relationship with genuine long-term potential is beginning — one that offers stability, groundedness, and the possibility of a truly material and physical expression of love. This connection can be built upon.',
      career: 'A powerful new financial or material opportunity is presenting itself — a new job offer, a business venture, or an investment that has genuine potential. The seed is excellent; now you must plant and tend it.',
      money: 'New financial abundance is arriving. The Ace of Pentacles is the most auspicious financial card in the deck — a windfall, a new income source, or the beginning of a truly prosperous financial era.',
      relationships: 'A new connection that offers genuine security and lasting value is forming. The Ace of Pentacles brings the grounded, reliable energy of someone who shows up consistently and builds something real.',
      growth: 'A new phase of practical, material growth is beginning. The Ace of Pentacles asks you to plant the seeds of your highest aspirations in the fertile ground of consistent, patient action.'
    },
    reversed: {
      general: 'A financial or material opportunity has been missed, poorly handled, or is being blocked. The seed is present but the ground is not being prepared — potential abundance is turning to frustration.',
      love: 'A promising relationship is being undermined by financial stress, practical incompatibility, or an unwillingness to invest in building something lasting. The potential is there but the foundation is shaky.',
      career: 'A financial opportunity has been missed or mishandled. The reversed Ace of Pentacles asks you to examine where poor planning, scarcity thinking, or a failure to act at the right moment has cost you.',
      money: 'Financial opportunities are being missed due to poor timing, inadequate planning, or a deep-seated scarcity belief that prevents you from receiving what is being offered. Examine the block.',
      relationships: 'Practical or financial instability is undermining the foundation of a relationship. The reversed Ace of Pentacles asks whether material concerns are being addressed honestly between you and the people you care about.',
      growth: 'You have a remarkable opportunity for material growth that you are somehow unable to receive or act upon. The reversed Ace of Pentacles asks you to examine what is blocking your capacity to manifest the abundance that is available to you.'
    }
  },
  {
    id: 'pentacles-2',
    name: 'Two of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 2,
    symbol: '⬟',
    uprightKeywords: ['balance', 'adaptability', 'time management', 'priorities', 'juggling'],
    reversedKeywords: ['imbalance', 'overwhelm', 'poor financial management', 'disorganization', 'chaos'],
    upright: {
      general: 'The Two of Pentacles keeps multiple priorities in motion simultaneously — a skillful juggler who manages the natural fluctuations of life with grace and good humor. Balance is the art form here.',
      love: 'Balancing love with the practical demands of life is the central challenge right now. The Two of Pentacles asks you to ensure that your relationship is getting the time and energy it deserves amidst competing demands.',
      career: 'You are managing multiple professional responsibilities with remarkable agility. The Two of Pentacles rewards those who can stay flexible, adapt quickly, and keep all the balls in the air with minimal drama.',
      money: 'Financial juggling is necessary — managing cash flow, balancing income and expenses, or adapting to fluctuating financial circumstances. The key is to stay agile rather than rigid in your financial approach.',
      relationships: 'You are balancing the needs of multiple important relationships with care and skill. The Two of Pentacles asks you to ensure that in managing everyone else\'s needs, you are not completely neglecting your own.',
      growth: 'Your growth right now comes from developing the art of graceful balance — learning to hold multiple demands, responsibilities, and priorities without dropping any of them, while also maintaining your own center.'
    },
    reversed: {
      general: 'The juggling act has become chaos — too many balls in the air, priorities colliding, and the inevitable consequence of trying to manage everything without a clear system or sustainable rhythm.',
      love: 'A romantic relationship is being neglected in the chaos of too many competing priorities. The reversed Two of Pentacles asks you to be honest about whether your partner is truly receiving the attention they deserve.',
      career: 'Professional overwhelm and disorganization are undermining your effectiveness. The reversed Two of Pentacles asks you to simplify your commitments, establish clearer priorities, and build better systems for managing your workload.',
      money: 'Poor financial management — living paycheck to paycheck, managing too many financial obligations without a coherent strategy — is creating unnecessary stress. The reversed Two of Pentacles calls for a clearer, simpler financial system.',
      relationships: 'You are so overwhelmed by competing demands that genuine connection is becoming impossible. The reversed Two of Pentacles asks you to identify what must be released so that your most important relationships can receive real attention.',
      growth: 'The chaos of an unmanageable schedule is preventing the depth of engagement that genuine growth requires. The reversed Two of Pentacles asks you to create the space — through simplification and prioritization — for meaningful development.'
    }
  },
  {
    id: 'pentacles-3',
    name: 'Three of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 3,
    symbol: '⬟',
    uprightKeywords: ['teamwork', 'collaboration', 'learning', 'skill', 'building'],
    reversedKeywords: ['misalignment', 'poor teamwork', 'lack of recognition', 'ego', 'disorganized'],
    upright: {
      general: 'The Three of Pentacles is the master craftsperson in their element — working in skilled collaboration with others, combining complementary talents to build something of genuine, lasting quality.',
      love: 'Building a relationship requires the same collaborative skill as any great project. The Three of Pentacles in love signals a relationship where both partners contribute their unique strengths and work together with genuine mutual respect.',
      career: 'Collaborative work and the satisfaction of shared professional achievement are at the center of this phase. The Three of Pentacles rewards those who can both teach and learn, contribute and receive, in a spirit of genuine teamwork.',
      money: 'Financial projects built through skilled collaboration and combined expertise are favored. The Three of Pentacles signals that the most substantial material gains right now come through working well with others.',
      relationships: 'Your closest relationships are characterized by genuine mutual respect and a willingness to learn from each other. The Three of Pentacles honors the beauty of collaborative relationships where both parties make each other better.',
      growth: 'Your growth right now comes through collaboration — allowing others\' different perspectives, skills, and knowledge to expand your own. The Three of Pentacles asks you to be both a generous teacher and a humble student.'
    },
    reversed: {
      general: 'Team misalignment, ego conflicts, or a lack of clear communication is preventing a collaborative project from reaching its potential. Someone is not pulling their weight or is working at cross-purposes with the group.',
      love: 'A failure to collaborate, communicate, or respect each other\'s contributions is creating friction in a relationship. The reversed Three of Pentacles asks you to examine whether both partners are truly working together as a team.',
      career: 'Poor teamwork, credit-stealing, or a breakdown in professional communication is undermining a project or team. The reversed Three of Pentacles asks you to diagnose where the collaboration is breaking down and address it directly.',
      money: 'A financial collaboration or partnership is experiencing misalignment. The reversed Three of Pentacles asks you to clarify roles, expectations, and contributions before the disorganization creates significant financial damage.',
      relationships: 'A lack of mutual recognition or appreciation within a relationship is creating resentment. The reversed Three of Pentacles asks both parties to acknowledge and celebrate each other\'s contributions more consistently.',
      growth: 'Pride, ego, or a refusal to admit what you don\'t know is limiting your growth. The reversed Three of Pentacles asks you to approach the people who know more than you with genuine humility and the willingness to learn.'
    }
  },
  {
    id: 'pentacles-4',
    name: 'Four of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 4,
    symbol: '⬟',
    uprightKeywords: ['stability', 'security', 'possessiveness', 'conservatism', 'control'],
    reversedKeywords: ['greed', 'hoarding', 'materialism', 'insecurity', 'releasing control'],
    upright: {
      general: 'The Four of Pentacles clings tightly to what it has built — financial security is valued here, but the grip may be tighter than necessary, and the fear of losing what is held may be preventing new abundance from flowing in.',
      love: 'Security and stability in love are important to you right now, which is understandable — but the Four of Pentacles asks whether your grip on a relationship is coming from genuine love or from a fear of being alone.',
      career: 'You are protecting your professional position and resources carefully — a reasonable instinct. But the Four of Pentacles asks whether excessive caution or a refusal to share your knowledge is limiting your professional growth.',
      money: 'A conservative, security-focused approach to finances has created real stability — celebrate this. But examine whether your grip on material security has crossed into hoarding or a stinginess that is limiting abundance.',
      relationships: 'Possessiveness or a fear of loss is creating controlling dynamics in an important relationship. The Four of Pentacles asks whether you are holding the people you love with open hands or with a suffocating grip.',
      growth: 'You have built something real and it is appropriate to protect it. But the Four of Pentacles asks whether the security you are maintaining is a foundation for growth or a fortress against life. True security allows for generous risk.'
    },
    reversed: {
      general: 'Hoarding, miserliness, or an obsessive grip on material security has reached a problematic level. Alternatively, you are finally releasing an unhealthy attachment to security and allowing more flow into your life.',
      love: 'Possessiveness or emotional hoarding is choking a romantic relationship. The reversed Four of Pentacles can also indicate the liberating release of excessive control — letting a partner have genuine freedom.',
      career: 'Either professional hoarding — refusing to share knowledge, guarding your territory obsessively — or the liberating release of excessive control is indicated. The direction depends on where you currently sit on this spectrum.',
      money: 'An unhealthy relationship with money — greed, hoarding, or an obsessive focus on accumulation at the expense of living — is indicated. Or you are finally releasing your death grip on financial control and allowing more flow.',
      relationships: 'The grip of control in a relationship is either intensifying to a breaking point or finally being released. The reversed Four of Pentacles asks you to examine what you are afraid will happen if you let go.',
      growth: 'You are releasing the belief that security requires control. The reversed Four of Pentacles marks the beginning of a more trusting, generous relationship with the material world — allowing abundance to flow rather than gripping it tightly.'
    }
  },
  {
    id: 'pentacles-5',
    name: 'Five of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 5,
    symbol: '⬟',
    uprightKeywords: ['hardship', 'loss', 'poverty', 'isolation', 'adversity'],
    reversedKeywords: ['recovery', 'charity', 'improvement', 'spiritual poverty', 'asking for help'],
    upright: {
      general: 'The Five of Pentacles shows two figures trudging through the cold, passing by a lit church window they seem not to notice. Hardship is real, but help is also available if you are willing to look up and ask for it.',
      love: 'Financial stress or a sense of emotional poverty is putting enormous pressure on a romantic relationship. The Five of Pentacles asks you to name the hardship openly rather than suffering through it alone.',
      career: 'A period of professional hardship — unemployment, financial insecurity, or feeling left out in the cold — is testing your resilience. The Five of Pentacles asks you to seek support and to notice the resources available that you may have overlooked.',
      money: 'Financial difficulty and material hardship are the primary themes. The Five of Pentacles validates the reality of this struggle while also pointing to the help that is available if you are willing to reach out and receive it.',
      relationships: 'A sense of isolation or exclusion from warmth and belonging is affecting your wellbeing. The Five of Pentacles asks you to look up from your suffering long enough to notice who is willing to help, and to allow them to do so.',
      growth: 'Adversity is the forge of genuine resilience. The Five of Pentacles asks you to endure this difficult period without losing hope — and to practice the humility of accepting help, which is its own form of profound growth.'
    },
    reversed: {
      general: 'The worst of a period of hardship is passing. Recovery, the acceptance of help, and the first signs of renewed material stability are beginning to emerge from what was a very difficult time.',
      love: 'A couple is emerging from a period of great financial or emotional hardship having discovered genuine resilience in their partnership. The reversed Five of Pentacles brings recovery and the renewed warmth of connection.',
      career: 'Professional recovery is underway after a painful period of hardship. The reversed Five of Pentacles signals the first signs of stability returning — a new job, a professional opportunity, or simply renewed confidence.',
      money: 'Financial recovery is beginning. The reversed Five of Pentacles brings the first signs of material stability after a period of genuine hardship — hold this recovery tenderly and build on it with care.',
      relationships: 'You are reaching out for the help and support you need rather than suffering alone. The reversed Five of Pentacles honors this courageous vulnerability and signals that the support you seek is genuinely available.',
      growth: 'You are emerging from a period of profound adversity with a depth of resilience and compassion that only genuine hardship can forge. The reversed Five of Pentacles marks the beginning of a recovery that carries the hard-won wisdom of survival.'
    }
  },
  {
    id: 'pentacles-6',
    name: 'Six of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 6,
    symbol: '⬟',
    uprightKeywords: ['generosity', 'charity', 'giving', 'receiving', 'sharing wealth'],
    reversedKeywords: ['selfishness', 'debt', 'power dynamics', 'strings attached', 'inequality'],
    upright: {
      general: 'The Six of Pentacles represents the beautiful flow of giving and receiving — wealth and resources shared generously, creating a cycle of abundance that benefits everyone in its orbit.',
      love: 'Generosity of spirit, time, and affection is flowing freely between you and someone you love. The Six of Pentacles in romance signals a relationship characterized by genuine mutual care and a willingness to give without keeping score.',
      career: 'A generous mentor, a well-resourced employer, or the opportunity to share your own knowledge and skills in meaningful ways is defining this professional phase. Generosity creates the flow that sustains abundance.',
      money: 'You are in a position to give generously and this generosity is both appropriate and rewarding. The Six of Pentacles asks you to share your abundance freely — the giving itself creates the conditions for continued prosperity.',
      relationships: 'The balance of giving and receiving in your relationships is healthy and sustaining. The Six of Pentacles invites you to notice who gives generously to you and to ensure that your gratitude and reciprocity are expressed clearly.',
      growth: 'Genuine generosity is one of the most powerful catalysts for spiritual growth. The Six of Pentacles asks you to practice giving — of your time, attention, resources, and wisdom — without expectation of return.'
    },
    reversed: {
      general: 'The generosity has strings attached — giving is being used to create power imbalances, to generate obligation, or to maintain control rather than to genuinely support others.',
      love: 'Generosity in a relationship is being weaponized — gifts given to create obligation, affection withdrawn as punishment, or a dynamic where one person\'s "giving" is really about maintaining control.',
      career: 'Power dynamics dressed as generosity may be at play in a professional environment. The reversed Six of Pentacles asks you to examine whether the "help" you are receiving or offering comes with hidden costs.',
      money: 'Debt dynamics, financial strings attached to relationships, or a pattern of giving that leaves you depleted without genuine reciprocity is indicated. Examine the true cost of the financial transactions in your life.',
      relationships: 'Generosity with strings attached, or an imbalanced dynamic where one person gives much more than they receive, is creating resentment. The reversed Six of Pentacles asks for a more honest accounting of relational exchange.',
      growth: 'Examine your motivations for giving. The reversed Six of Pentacles asks whether your generosity is truly selfless or whether it is serving an unconscious need for control, approval, or the comfort of feeling indispensable.'
    }
  },
  {
    id: 'pentacles-7',
    name: 'Seven of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 7,
    symbol: '⬟',
    uprightKeywords: ['patience', 'investment', 'long-term view', 'perseverance', 'assessment'],
    reversedKeywords: ['impatience', 'poor returns', 'lack of growth', 'rethinking', 'wasted effort'],
    upright: {
      general: 'The Seven of Pentacles pauses to assess what the long work is yielding — a moment of patient evaluation between planting and harvest, asking whether the investment of time and energy is on track.',
      love: 'A relationship requires patient, long-term investment to truly flourish. The Seven of Pentacles asks whether you are willing to tend the garden of love with the same patience you would give any significant life project.',
      career: 'A moment of honest professional assessment is valuable right now. The Seven of Pentacles asks whether your current career investment is yielding the returns you hoped for, and whether adjustments are needed.',
      money: 'Long-term financial investments — in education, in a business, in consistent saving — are being evaluated. The Seven of Pentacles rewards patient persistence and asks whether your financial strategy requires fine-tuning.',
      relationships: 'A long-term relationship is at a point of assessment — what has the investment of years yielded? The Seven of Pentacles asks you to honestly evaluate whether the relationship is growing in the direction you hoped.',
      growth: 'Real growth cannot be rushed. The Seven of Pentacles asks you to take the long view of your personal development — to assess honestly where you are, celebrate your progress, and recommit to the patient work of becoming.'
    },
    reversed: {
      general: 'The investment of time and energy is not yielding the returns expected. The reversed Seven of Pentacles asks you to honestly assess whether you need to change your strategy, adjust your expectations, or simply increase your patience.',
      love: 'Impatience with the pace of a relationship\'s development, or the honest recognition that despite genuine effort the relationship is not growing in a healthy direction, is requiring a careful reassessment.',
      career: 'Poor returns on a significant professional investment of time and energy are demoralizing. The reversed Seven of Pentacles asks whether the strategy needs to change, the timeline extended, or whether it is time to redirect your efforts elsewhere.',
      money: 'A financial investment is not performing as hoped. The reversed Seven of Pentacles asks you to reassess your strategy honestly — is the problem one of patience, poor execution, or a fundamentally flawed approach?',
      relationships: 'Despite significant investment, a relationship is not growing or improving. The reversed Seven of Pentacles asks you to honestly assess whether more time and effort are warranted, or whether it is time to redirect your energy.',
      growth: 'You may be working hard at personal development but not seeing the results you hoped for. The reversed Seven of Pentacles asks whether your growth strategy is genuinely effective, or whether a different approach might yield better returns.'
    }
  },
  {
    id: 'pentacles-8',
    name: 'Eight of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 8,
    symbol: '⬟',
    uprightKeywords: ['diligence', 'skill', 'craft', 'mastery', 'dedication'],
    reversedKeywords: ['perfectionism', 'lack of focus', 'mediocrity', 'shortcuts', 'no ambition'],
    upright: {
      general: 'The Eight of Pentacles is the dedicated apprentice — head down, fully absorbed in the repetitive, patient work of mastery. Excellence is not a destination; it is a practice. Show up for it every day.',
      love: 'The same devoted attention you bring to mastering your craft is being called for in your love life. Relationships require consistent, patient, skilled tending — the Eight of Pentacles asks you to become a true craftsperson of connection.',
      career: 'This is your season of dedicated professional development. The Eight of Pentacles honors the long hours of diligent practice — invest deeply in developing your craft, and mastery will follow as surely as it must.',
      money: 'Building wealth through consistent, skilled effort is the theme. The Eight of Pentacles rewards those who show up for their financial responsibilities with the same dedication they bring to their best work.',
      relationships: 'You are developing the skills of genuine relational craft — listening more deeply, communicating more clearly, showing up more consistently. These are skills learned through practice, and they are worth every hour of that practice.',
      growth: 'The deepest growth comes through disciplined, devoted practice over time. The Eight of Pentacles asks you to commit to developing your gifts with the patient attention of a master craftsperson — it is the only path to true excellence.'
    },
    reversed: {
      general: 'Dedication to craft has tipped into perfectionism that prevents completion, or the commitment to quality has dissolved into a mediocrity that reflects a loss of genuine ambition.',
      love: 'You may be cutting corners in your relationship — not showing up with the quality of attention and care that genuine love requires. The reversed Eight of Pentacles asks you to examine whether you are truly investing in connection.',
      career: 'Perfectionism is preventing progress, or a fundamental lack of commitment to quality is producing mediocre work. The reversed Eight of Pentacles asks you to find the middle path between impossible standards and genuine effort.',
      money: 'Cutting corners in financial management — failing to track your spending, ignoring important financial details, or taking shortcuts that ultimately cost more than they save — is indicated.',
      relationships: 'A lack of genuine effort in your relationships — showing up habitually rather than with real presence and care — is allowing connections to stagnate. The reversed Eight of Pentacles asks you to reengage with genuine dedication.',
      growth: 'Either perfectionism is blocking your development — nothing is ever good enough to share or complete — or a lack of genuine commitment to the work is producing growth in name only. Find the dedicated middle path.'
    }
  },
  {
    id: 'pentacles-9',
    name: 'Nine of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 9,
    symbol: '⬟',
    uprightKeywords: ['abundance', 'luxury', 'self-sufficiency', 'success', 'independence'],
    reversedKeywords: ['financial dependence', 'recklessness', 'living beyond means', 'shallow success', 'overindulgence'],
    upright: {
      general: 'The Nine of Pentacles is the graceful embodiment of self-made abundance — someone who has cultivated both material prosperity and inner refinement through their own efforts and now enjoys the fruits with elegant ease.',
      love: 'You are entering a period of romantic abundance from a place of genuine self-sufficiency — you don\'t need a partner to complete you, which makes you available for the kind of love that enhances rather than defines you.',
      career: 'The fruits of your professional labor are ripening into genuine abundance. The Nine of Pentacles marks the satisfying arrival at a place of financial and professional independence earned through consistent, patient effort.',
      money: 'Financial abundance is yours to enjoy. The Nine of Pentacles brings the refined pleasure of material prosperity earned through your own efforts — savor this abundance with the elegant confidence of someone who created it.',
      relationships: 'You are deeply satisfied within yourself, which makes your relationships more nourishing and less desperate. The Nine of Pentacles invites you to bring this same sense of inner abundance to your connections.',
      growth: 'The Nine of Pentacles marks the arrival at genuine self-sufficiency — not the cold independence of someone who doesn\'t need others, but the warm independence of someone who is complete within themselves.'
    },
    reversed: {
      general: 'The abundance that was earned is being squandered or is proving less satisfying than expected. Financial recklessness, dependence, or the hollow feeling of material success without inner fulfillment are the shadow themes.',
      love: 'Financial dependence in a romantic relationship, or the use of material abundance to compensate for emotional lack, may be creating a dynamic that neither partner is truly satisfied with.',
      career: 'The financial or professional success you\'ve achieved feels hollow or is being undermined by recklessness. The reversed Nine of Pentacles asks you to reconnect with the genuine satisfaction of earned abundance.',
      money: 'Overindulgence, living beyond your means, or the reckless spending of hard-earned abundance is creating financial instability. The reversed Nine of Pentacles asks you to reconnect with the discipline that created your prosperity.',
      relationships: 'Financial dependency or the expectation that material resources can substitute for genuine emotional investment is creating an imbalanced dynamic. The reversed Nine of Pentacles asks for a more authentic exchange.',
      growth: 'The appearance of self-sufficiency may be masking a deeper dependence — on approval, on external validation, or on the comfort of material abundance to avoid deeper inner work. Examine what your prosperity is covering.'
    }
  },
  {
    id: 'pentacles-10',
    name: 'Ten of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 10,
    symbol: '⬟',
    uprightKeywords: ['legacy', 'wealth', 'family', 'inheritance', 'long-term success'],
    reversedKeywords: ['family dysfunction', 'financial failure', 'instability', 'loss of inheritance', 'broken values'],
    upright: {
      general: 'The Ten of Pentacles is the culmination of the material journey — multi-generational wealth, family legacy, and the deep satisfaction of having built something that will outlast you.',
      love: 'A relationship that has stood the test of time and built something genuinely lasting together is celebrated here. The Ten of Pentacles honors enduring love that creates legacy — family, home, and a story worth telling.',
      career: 'A career culmination of enduring significance — a business built to last, a professional legacy established, or work that will continue to yield results long after the individual effort has been completed.',
      money: 'Lasting financial wealth and the building of a family legacy are the hallmarks of this card. The Ten of Pentacles signals that your financial efforts are building toward something of real, enduring significance.',
      relationships: 'Family, belonging, and the comfort of long-established bonds of deep trust and mutual history are at the center of your relational world. The Ten of Pentacles celebrates the beauty of enduring connection.',
      growth: 'You are building something that will matter beyond your own lifetime. The Ten of Pentacles asks you to consider the legacy you are creating — through your work, your relationships, and the values you embody and pass on.'
    },
    reversed: {
      general: 'Family dysfunction, the loss of inherited wealth or tradition, or the failure of a long-term material goal is disrupting what should be a foundation of lasting security.',
      love: 'Family pressure, conflicting values, or the dissolution of long-established relationship bonds is creating instability. The reversed Ten of Pentacles asks what has broken down in the foundation of a valued connection.',
      career: 'A career or business built to last is experiencing fundamental problems — either internal dysfunction, failed legacy planning, or a loss of the values that made the enterprise worth building in the first place.',
      money: 'Loss of family wealth, failed financial legacy, or the discovery that the material foundation you were counting on is not as solid as believed is creating significant disruption.',
      relationships: 'Family dysfunction — inherited patterns, disputed inheritance, conflicting values — is creating pain in your most foundational relationships. The reversed Ten of Pentacles asks you to examine and consciously change what you have inherited.',
      growth: 'You are examining the values, patterns, and material realities you have inherited from your family of origin — and choosing consciously which to carry forward and which to set down. This examination is itself a profound act of growth.'
    }
  },
  {
    id: 'pentacles-11-page',
    name: 'Page of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 11,
    symbol: '⬟',
    uprightKeywords: ['ambition', 'diligence', 'learning', 'new beginnings', 'opportunity'],
    reversedKeywords: ['lack of ambition', 'procrastination', 'laziness', 'missed opportunity', 'immaturity'],
    upright: {
      general: 'The Page of Pentacles holds their coin with the focused attention of someone who has just discovered what they want to build. This is the energy of the eager student — practical, grounded, and fully committed to learning.',
      love: 'A new relationship with genuine long-term potential is beginning. The Page of Pentacles in love brings grounded, practical affection — not flashy, but deeply real and committed to building something lasting.',
      career: 'A new educational or professional opportunity is opening. The Page of Pentacles brings the energy of the willing learner — take the course, start the training, accept the mentorship, and invest in your developing skills.',
      money: 'A new financial learning opportunity is presenting itself — whether through formal education, financial mentorship, or the simple decision to take your financial literacy seriously for the first time. Begin.',
      relationships: 'A new connection is forming that is grounded, reliable, and genuinely committed to growing into something meaningful. The Page of Pentacles brings the energy of someone who shows up, follows through, and builds trust gradually.',
      growth: 'Your growth right now comes through practical learning and grounded application. The Page of Pentacles asks you to invest in developing real, tangible skills — to be a student, not just a dreamer.'
    },
    reversed: {
      general: 'Procrastination, laziness, or a failure to follow through on promising beginnings is allowing real opportunities to slip away. The reversed Page of Pentacles asks you to examine what is preventing you from applying yourself.',
      love: 'A promising romantic beginning is being undermined by unreliability, immaturity, or a failure to follow through on the commitments made. The reversed Page of Pentacles asks whether this person — or you — is ready for real relationship.',
      career: 'A valuable learning or development opportunity is being squandered. The reversed Page of Pentacles asks why you are not applying yourself to the practical skills and knowledge that could genuinely transform your career.',
      money: 'Procrastination about financial matters — avoiding the budget, ignoring the savings plan, putting off necessary financial education — is costing you. The reversed Page of Pentacles asks you to start now, however imperfectly.',
      relationships: 'Immaturity or a pattern of great beginnings without follow-through is undermining the trust-building that genuine connection requires. The reversed Page of Pentacles asks for greater consistency and reliability.',
      growth: 'All ambition and no execution is the shadow here. The reversed Page of Pentacles asks you to stop planning your growth and start doing the actual, practical, sometimes tedious work that development requires.'
    }
  },
  {
    id: 'pentacles-12-knight',
    name: 'Knight of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 12,
    symbol: '⬟',
    uprightKeywords: ['hard work', 'routine', 'dependability', 'patience', 'conservative'],
    reversedKeywords: ['boredom', 'feeling stuck', 'perfectionism', 'workaholic', 'stubborn'],
    upright: {
      general: 'The Knight of Pentacles moves slowly but with absolute certainty — methodical, reliable, and utterly committed to seeing every task through to its most thorough completion. This knight finishes what they start.',
      love: 'A partner who is reliable, devoted, and committed to building something lasting over time is present or approaching. The Knight of Pentacles in love may not be flashy, but their consistency is one of the most genuine forms of love.',
      career: 'Hard work, methodical execution, and unwavering reliability are your greatest professional strengths right now. The Knight of Pentacles rewards those who do the unglamorous work with the same thoroughness as the visible work.',
      money: 'Patient, consistent financial habits — regular saving, disciplined spending, methodical debt reduction — are building the foundation of real material security. Trust the slow accumulation.',
      relationships: 'The slow, consistent work of showing up for people you care about is building trust that nothing else can replicate. The Knight of Pentacles asks you to value your own reliability as one of your greatest relational gifts.',
      growth: 'Your growth comes through sustained, disciplined commitment to your practices rather than explosive bursts of inspiration. The Knight of Pentacles asks you to trust the slow, sure path — it leads further than the fast one.'
    },
    reversed: {
      general: 'The patient thoroughness of the Knight has turned to rigid stubbornness, workaholic perfectionism, or a profound feeling of being stuck in a rut with no sense of how to break free.',
      love: 'A relationship dynamic has become stagnant and routine — comfortable perhaps, but no longer growing or surprising. The reversed Knight of Pentacles asks what small shake-up might introduce some needed vitality.',
      career: 'Perfectionism, workaholism, or a rigid unwillingness to adapt your methods even when they aren\'t working is limiting your professional effectiveness. The reversed Knight of Pentacles asks for greater flexibility.',
      money: 'An overly conservative financial approach — refusing to make any investments, clinging to the familiar even when better options are available — may be keeping you stuck at a lower level of financial development.',
      relationships: 'Stubbornness or a boring predictability is draining the energy from your most important connections. The reversed Knight of Pentacles asks you to introduce some genuine spontaneity and openness to change.',
      growth: 'Feeling stuck in an endless routine that no longer challenges or stimulates you is the primary obstacle. The reversed Knight of Pentacles asks you to deliberately introduce something new — a different practice, a challenging goal — to break the stagnation.'
    }
  },
  {
    id: 'pentacles-13-queen',
    name: 'Queen of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 13,
    symbol: '⬟',
    uprightKeywords: ['nurturing', 'practical', 'financial security', 'warmth', 'down-to-earth'],
    reversedKeywords: ['financial dependency', 'smothering', 'imbalance', 'materialism', 'insecurity'],
    upright: {
      general: 'The Queen of Pentacles sits in a garden of her own creation — she has built material security through practical wisdom and nurtures everything in her care with the same generous, grounded abundance.',
      love: 'A deeply nurturing, practically loving relationship is yours — one where love is expressed through warm, tangible acts of care. The Queen of Pentacles in love shows up with food on the table, a thoughtful gesture, and unwavering presence.',
      career: 'Your ability to create practical, abundant, and sustainable professional environments is your most valuable asset. The Queen of Pentacles leads through practical wisdom, generous support, and the creation of genuine material security.',
      money: 'Financial wisdom and a talent for creating real material abundance are the hallmarks of your current relationship with money. The Queen of Pentacles grows wealth patiently, generously, and with impeccable practical skill.',
      relationships: 'You nourish the people in your life through warmth, practical care, and a steady, reliable presence that makes others feel genuinely held and supported. This is love in its most embodied form.',
      growth: 'Your growth right now is expressed through the body, through nature, and through the practical creation of beauty and abundance in your everyday environment. The Queen of Pentacles asks you to honor the sacred in the everyday.'
    },
    reversed: {
      general: 'The Queen\'s generous nurturance has become smothering, or her practical genius has turned to an insecure materialism that uses possessions and financial control as substitutes for genuine love.',
      love: 'Over-nurturing — doing too much, smothering a partner\'s autonomy, or using material generosity to maintain emotional control — is undermining genuine connection. Allow those you love the space to care for themselves.',
      career: 'Practical insecurity or an imbalanced focus on material security at the expense of genuine professional satisfaction is creating a hollow kind of success. Examine what you are working for beyond the paycheck.',
      money: 'Financial dependency — either your own dependence on another, or fostering dependence in others — is indicated. The reversed Queen of Pentacles asks you to cultivate genuine financial independence and self-sufficiency.',
      relationships: 'Smothering care or the use of material provision to create emotional obligation is creating an unhealthy relational dynamic. The reversed Queen of Pentacles asks for a more balanced, less controlling form of love.',
      growth: 'Your focus on material security and practical provision may be preventing the kind of inner growth that requires stepping away from the comfortable and the familiar. The reversed Queen of Pentacles asks what nourishes your soul beyond what it nourishes your body.'
    }
  },
  {
    id: 'pentacles-14-king',
    name: 'King of Pentacles',
    arcana: 'minor',
    suit: 'pentacles',
    number: 14,
    symbol: '⬟',
    uprightKeywords: ['abundance', 'prosperity', 'security', 'leadership', 'discipline'],
    reversedKeywords: ['greed', 'materialistic', 'stubborn', 'corrupt', 'abuse of power'],
    upright: {
      general: 'The King of Pentacles is the master of the material realm — his abundance is real, earned, and shared with the generosity of someone who has mastered both creating and stewarding wealth.',
      love: 'A partner who offers genuine material security, unwavering stability, and the kind of love that builds lasting things is present or approaching. The King of Pentacles in love provides and protects with calm, abundant devotion.',
      career: 'You are at the pinnacle of practical professional mastery — your leadership creates genuine material abundance for everyone in your domain, and your authority is both earned and exercised with wisdom.',
      money: 'You have achieved the highest level of material mastery — wealth is substantial, wisely managed, and being used to create security and abundance for those you care about. The King of Pentacles is the most materially powerful card.',
      relationships: 'You are the steady, providing, abundantly generous presence that your most important relationships have always been able to count on. The King of Pentacles shows love through consistent, material acts of care and provision.',
      growth: 'The King of Pentacles represents the fullest flowering of practical wisdom. Your growth now lies in using your material mastery in service of something larger than personal accumulation — to become a steward of genuine, shared abundance.'
    },
    reversed: {
      general: 'Material mastery has become greed and corruption. The King\'s stable, generous abundance has curdled into hoarding, financial manipulation, or the abuse of material power to control others.',
      love: 'Material wealth is being used as a tool of control in a romantic relationship — gifts given with strings attached, financial security weaponized as leverage. The reversed King of Pentacles asks whether love or control is the true agenda.',
      career: 'Financial corruption, the abuse of material power, or an excessive focus on accumulation at the expense of ethics and genuine leadership is creating a poisoned professional environment.',
      money: 'Greed, financial corruption, or a ruthless pursuit of material gain without ethical consideration is indicated. The reversed King of Pentacles asks you to examine whether your relationship with money is serving your deepest values or betraying them.',
      relationships: 'Material power is being used to create dependency and control in your most important relationships. The reversed King of Pentacles asks you to examine whether your generosity is genuine or strategic.',
      growth: 'The reversed King of Pentacles asks whether your pursuit of material success has become an end in itself rather than a means to a life of genuine meaning. True mastery of the material world ultimately serves something larger than itself.'
    }
  }
];
