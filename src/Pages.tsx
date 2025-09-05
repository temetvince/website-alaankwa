// content.js

import React from 'react';

/**
 * Function to get an array of pages with content
 * @param setCurrentPage - Function to set the current page
 * @returns Array of pages with content
 */
export const getPages = (
  setCurrentPage: (value: React.SetStateAction<number> | number) => void,
) => [
  {
    id: 'toc',
    title: 'Title and Table of Contents',
    content: (
      <>
        <h1>
          Beyond the Event Horizon
          <br />
          <small>A Primer for Wormhole Dwelling</small>
        </h1>
        <h3 className='author'>by Lance Westar</h3>
        <h2>Table of Contents</h2>
        <ol>
          <li>
            <button
              onClick={() => {
                setCurrentPage(2);
              }}
            >
              Introduction
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(3);
              }}
            >
              Getting Started
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(4);
              }}
            >
              Daily Operational Routine
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(5);
              }}
            >
              Earning ISK in Wormhole Space
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(6);
              }}
            >
              Bookmarking Best Practices
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(7);
              }}
            >
              Understanding Wormholes
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(8);
              }}
            >
              Survival Strategies
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(9);
              }}
            >
              Market Hubs and Jump Clones
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(10);
              }}
            >
              Skill Training and Implants
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(11);
              }}
            >
              Corporate Roles
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(12);
              }}
            >
              Electronic Warfare (EWAR)
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(13);
              }}
            >
              Defense and Tanking
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setCurrentPage(14);
              }}
            >
              Conclusion
            </button>
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'introduction',
    title: 'Introduction',
    content: (
      <>
        <h2 id='introduction'>Introduction</h2>
        <p>
          Navigating the vast and enigmatic expanse of wormhole space in EVE
          Online offers both significant challenges and rewards. This guide
          serves as a comprehensive resource for members embarking on wormhole
          operations, providing the essential knowledge to master this complex
          environment. Whether you're new to New Eden or an experienced pilot,
          this primer covers everything from fundamental preparation and daily
          routines to advanced strategies for survival, ISK generation, and
          corporate participation in wormhole space. After thoroughly reviewing
          this document, it is recommended that you seek mentorship from a
          seasoned corporation veteran to learn the art of wormhole rolling—a
          skill that, with practice, will distinguish you as a true follower of
          Bob.
        </p>
      </>
    ),
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    content: (
      <>
        <h2 id='getting-started'>Getting Started</h2>
        <h3>Preparations Before Departure</h3>
        <p>
          Before venturing into wormhole space, it is crucial to undertake a few
          key preparatory actions to ensure your safety and efficiency.
        </p>
        <p>
          Ensure your ship prominently displays the corporate symbol, signifying
          your membership and loyalty to the corporation. If you don't have the
          symbol yet, you can request it from any corporation member. It's
          usually best to place this symbol at the beginning of your ship's
          name, so consider saving it in the in-game Notebook for easy access.
        </p>
        <p>
          Another vital step is to set your home station in a major market hub,
          such as Jita or Amarr, before entering wormhole space. Since
          respawning within wormhole space is impossible, having your home
          station in a well-connected hub provides a secure and convenient base
          of operations, ensuring you can quickly and safely return if needed.
        </p>
        <h3>Actions Upon Arrival</h3>
        <p>
          Once you’ve arrived in wormhole space, it is highly advisable to
          utilize a Jump Clone in the home hole to safeguard your primary
          implanted clone. Additionally, one of your first priorities should be
          to install Jump Clones in major market hubs. This setup allows you to
          swiftly return to your base if you are podded, minimizing downtime and
          enabling you to rejoin wormhole operations without delay.
        </p>
      </>
    ),
  },
  {
    id: 'daily-operational-routine',
    title: 'Daily Operational Routine',
    content: (
      <>
        <h2 id='daily-operational-routine'>Daily Operational Routine</h2>
        <h3>Logging In Procedures</h3>
        <p>
          Upon logging in, it’s crucial to integrate smoothly with ongoing
          corporate operations. Start by immediately joining the corporate
          fleet, which is vital for coordinating activities in wormhole space.
          If the fleet doesn’t exist, take the initiative to create it. Next,
          log in to Pathfinder, a critical tool that provides valuable insights
          and data on wormhole space to support operations. Finally, consider
          joining or starting a voice channel in the corporation’s Discord. Even
          if it’s initially empty, your presence can often encourage others to
          join.
        </p>
        <h3>Securing the Home System</h3>
        <p>
          Your daily routine in wormhole space begins with a few essential tasks
          that are crucial for your safety and the corporation’s success. Start
          by scanning for new signatures (sigs) in your home system. These
          signatures are key to wormhole exploration, and staying updated on any
          new developments is vital. If no new signatures are found in your home
          system, move on to the static wormholes and perform the same scan.
        </p>
        <p>
          To streamline this process, use Pathfinder’s Signature Reader
          copy-and-paste feature. When consistently used across the corporation,
          this tool simplifies the tracking and management of PvE opportunities
          and enables quick and efficient signature checks, enhancing overall
          situational awareness.
        </p>
        <h3>Expanding Territory</h3>
        <p>
          Once your initial scans are complete, proceed with exploration. Choose
          an unscanned wormhole, ideally one that is a "leaf" in the network,
          suggesting it’s likely unexplored and could expand the corporation’s
          cartographic knowledge. Scan this wormhole to uncover hidden
          opportunities and potential threats.
        </p>
        <h3>Maximizing Profit</h3>
        <p>
          After exploration, consider engaging in PvE activities based on your
          scans. These might include gas harvesting, relic and data site
          exploration, or combat site engagement. Ensure you have the necessary
          skills and equipment before tackling each site. Avoid particularly
          challenging sites such as Ordinary, Bountiful, Vast, Vital, and
          Instrumental sites unless you are fully prepared.
        </p>
        <p className='tip'>
          <strong>TIP:</strong> Respect your fellow corpmates by avoiding the
          practice of following another explorer and taking the sites they’ve
          uncovered, as this is considered poor etiquette. If you’re interested
          in a site, politely ask the prospector if they’d be willing to split
          the rewards for your assistance.
        </p>
      </>
    ),
  },
  {
    id: 'earning-isk',
    title: 'Earning ISK in Wormhole Space',
    content: (
      <>
        <h2 id='earning-isk'>Earning ISK in Wormhole Space</h2>
        <p>
          Earning ISK in wormhole space can be highly lucrative if you know
          where to focus your efforts. There are both consistent and
          inconsistent income sources, each offering varying levels of risk and
          reward.
        </p>
        <h3>Consistent Income Sources</h3>
        <h4>Gas Huffing</h4>
        <p>
          Gas huffing involves extracting valuable gases from wormhole clouds
          and presents a balanced risk-to-reward ratio. To optimize your
          earnings, it's best to use T2 or Faction Prospect ships, or a Covetor
          equipped with mining boosts, particularly when operating in rich gas
          clouds. With the right setup, you can expect to earn approximately
          100-150 million ISK per hour.
        </p>
        <p>
          Be aware that NPC rats typically spawn 15-20 minutes after the initial
          warp to a gas site. Despite this, gas huffing remains a relatively
          safe and consistent method of generating income in wormhole space.
          After harvesting, the gas can be compressed for easier
          transportation—note that only the decompression process requires
          specific skills. Alternatively, the gas can be used in Reactions to
          create more profitable products, further increasing your ISK gains.
        </p>
        <h4>Ratting</h4>
        <p>
          Ratting, or engaging in combat with NPC pirates, is another consistent
          income source but comes with higher risks and potentially higher
          rewards.
        </p>
        <ul>
          <li>
            <strong>C1-C2 Wormholes:</strong> These offer less profitability. If
            you have the option, focus on signature sites rather than anomalies,
            as the rewards for anomalies do not scale well with the lower
            wormhole classes.
          </li>
          <li>
            <strong>C3 Wormholes:</strong> These are particularly lucrative for
            ratting, with potential earnings of 200-250 million ISK per hour
            when using a Heavy Assault Cruiser. This income can nearly double if
            you pilot a Marauder, though this is generally not advised due to
            the increased risk.
          </li>
          <li>
            <strong>C4 Wormholes:</strong> Generally not recommended for ratting
            due to poor ISK-to-EHP ratios and difficult rat spawn ranges, making
            them less efficient and more challenging for sustained operations.
          </li>
          <li>
            <strong>C5 Wormholes:</strong> These are exceptionally profitable
            for those capable of soloing in Marauders or running a small fleet
            of three Leshaks or Nestors.
          </li>
        </ul>
        <h3>Inconsistent Income Sources</h3>
        <p>
          Inconsistent income sources in wormhole space offer potentially high
          rewards but come with varying degrees of risk. The primary activities
          in this category are relic and data site exploration.
        </p>
        <ul>
          <li>
            <strong>Relic Sites:</strong> These sites generally offer higher
            rewards but are risky to explore due to the potential for hostile
            encounters.
          </li>
          <li>
            <strong>Data Sites:</strong> These offer lower rewards compared to
            relic sites but offer a variety of loot useful for industry.
          </li>
        </ul>
        <h4>Core Node Placement Principles</h4>
        <p>
          Understanding the placement of core nodes is key to successful site
          hacking. The core node, which you must reach to unlock the site, is
          always adjacent to at least one hostile node. Hostile nodes, which can
          damage your virus, never appear in positions surrounded by six other
          spots unless they are adjacent to the core. Typically, the core is
          located six or more spots away from your starting point, unless
          spatial constraints make this impossible. Being aware of these
          principles can help you anticipate the location of the core and plan
          your approach accordingly.
        </p>
        <h4>Effective Hacking Strategies</h4>
        <p>
          To maximize your hacking success, it’s important to use the right
          strategies:
        </p>
        <p>
          <strong>Wrench Utility:</strong> Utilize the wrench utility before
          your virus sustains damage to increase its health above the initial
          value. This can provide you with a significant advantage as you
          navigate through the nodes.
        </p>
        <p>
          <strong>Shields and Kernel Rot:</strong> Save the Shields and Kernel
          Rot items for critical moments. These powerful tools can make a
          crucial difference in challenging situations, giving you the upper
          hand when you need it most.
        </p>
        <p>
          <strong>Path Selection:</strong> If you encounter a particularly
          difficult hostile node, consider exploring alternative paths instead
          of forcing your way through. Sometimes, taking a different route can
          lead to a more favorable outcome.
        </p>
        <p>
          <strong>Secondary Vectors Utility:</strong> Deploy the "Secondary
          Vectors" utility to neutralize hostile nodes that reduce your attack
          power for three turns. This allows you to safely explore other nodes
          during this time, giving you more opportunities to find the core.
        </p>
        <h4>General Hacking Tips</h4>
        <p>
          <strong>Plan Ahead:</strong> Before initiating a hack, take a few
          moments to assess the grid. Carefully survey the layout and identify
          potential paths, planning your approach to minimize risks and maximize
          efficiency.
        </p>
        <p>
          <strong>Strategic Resource Management:</strong> Your utilities are
          powerful tools, but they are limited. Use them strategically,
          reserving their use for critical moments when they can provide the
          most benefit. Effective resource management can often be the
          difference between success and failure.
        </p>
        <p>
          <strong>Adaptability and Flexibility:</strong> No two hacks are the
          same, and challenges can arise unexpectedly. Stay adaptable and be
          ready to change your strategy on the fly. Whether it's choosing an
          alternate path or deploying a utility at the right time, your ability
          to respond to changing circumstances is key to overcoming difficult
          hacks.
        </p>
      </>
    ),
  },
  {
    id: 'bookmarking',
    title: 'Bookmarking Best Practices',
    content: (
      <>
        <h2 id='bookmarking'>Bookmarking Best Practices</h2>
        <h3>Naming Conventions</h3>
        <p>
          Establish and follow a consistent naming convention for your bookmarks
          to maintain clarity and organization. For example, use the format{' '}
          <code>.C4s SIG [Last 3 Digits of Name] EoL</code>, where{' '}
          <code>.</code> indicates a route leading homeward, <code>s</code>{' '}
          denotes a static wormhole, and <code>EoL</code> signals that the
          wormhole is nearing the end of its life. Consistent naming not only
          helps you quickly identify bookmarks but also aids in communication
          with other corporation members.
        </p>
        <h3>Organizational Structure</h3>
        <p>
          Organize your bookmarks into categories for easier access and
          management. Save exploration sites under a "Signatures" folder and
          wormholes under "Wormholes." This structure simplifies the process of
          locating specific bookmarks and ensures that your navigation data is
          logically arranged, reducing the chances of confusion during
          operations.
        </p>
        <h3>Regular Maintenance</h3>
        <p>
          Bookmarks should be regularly updated and pruned to maintain accuracy
          and relevance. As a general rule, avoid keeping bookmarks for more
          than two days unless necessary. You should set this when creating the
          bookmark for all signatures and wormholes. Regular maintenance of your
          bookmarks ensures that you always have current and reliable navigation
          information, minimizing the risk of following outdated paths.
        </p>
        <h3>Operational Best Practices</h3>
        <p>
          When traversing wormholes, always create a bookmark for the return
          path immediately. To improve accuracy, save wormhole bookmarks using
          the Overview or 3D view, as these methods reduce the likelihood of
          errors. For signatures, bookmarking from the Probe Scanner view is
          generally sufficient and efficient.
        </p>
        <p>
          Before jumping into an unknown wormhole, right-click its bookmark,
          select Edit Location, and keep the editing window open during the
          jump. This allows you to quickly update the bookmark with any new
          information gained from the jump, ensuring that your navigation data
          remains precise and up-to-date.
        </p>
      </>
    ),
  },
  {
    id: 'understanding-wormholes',
    title: 'Understanding Wormholes',
    content: (
      <>
        <h2 id='understanding-wormholes'>Understanding Wormholes</h2>
        <h3>Key Terminology</h3>
        <p>
          Understanding key wormhole terminology is crucial for safe and
          effective navigation in wormhole space.
        </p>
        <p>
          <strong>K162:</strong> This designation is one of the most important
          in wormhole navigation. It indicates that a ship has entered the
          current wormhole from the opposite side, signaling that the wormhole
          has been activated. Identifying a K162 wormhole is critical for
          assessing potential threats and gauging the level of activity in the
          surrounding area.
        </p>
        <p>
          <strong>Statics:</strong> Statics are wormholes that regenerate after
          collapsing, playing a significant role in wormhole dynamics. These
          wormholes will remain closed until they are warped to, so
          understanding their behavior is vital for planning navigation routes.
          If a static wormhole is only warped to and not traversed, it will stay
          closed for at least 9 hours, allowing for strategic planning and
          movement.
        </p>
        <p>
          <strong>Wandering:</strong> In addition to statics, wandering
          wormholes may also appear. These wormholes follow the same rules as
          statics when it comes to warping and traversing, adding another layer
          of complexity to wormhole navigation. Being aware of both static and
          wandering wormhole behaviors ensures better preparedness and
          decision-making in unpredictable environments.
        </p>
        <h3>Security Classifications</h3>
        <p>
          Wormholes are categorized by their security levels, which range from{' '}
          <strong>Unknown</strong> (C1-C3, C13) to{' '}
          <strong>Dangerous Unknown</strong> (C4-C5), and{' '}
          <strong>Deadly Unknown</strong> (C6). Wormholes leading to known space
          are classified by their destination: <strong>Highsec</strong>,{' '}
          <strong>Lowsec</strong>, and <strong>Nullsec</strong>, while wormholes
          leading to Triglavian space are classified as <strong>Pochven</strong>
          . Familiarity with these classifications is essential for gauging the
          risks and rewards associated with each wormhole.
        </p>
        <p className='tip'>
          <strong>TIP:</strong> C1 and C3 wormholes don't have j-space statics
          and C4+ wormholes don't have k-space statics.
        </p>
        <h3>Visual Identification Tips</h3>
        <p>
          Each wormhole class within the game is associated with a unique visual
          texture, which can be used for identification. To accurately determine
          a wormhole’s type, rotate the camera around the wormhole to carefully
          observe its distinct features. This methodical observation will enable
          you to quickly and accurately identify the class of wormhole you are
          dealing with, enhancing your situational awareness and decision-making
          in wormhole space.
        </p>
      </>
    ),
  },
  {
    id: 'survival-strategies',
    title: 'Survival Strategies',
    content: (
      <>
        <h2 id='survival-strategies'>Survival Strategies</h2>
        <h3>Operational Safety</h3>
        <p>
          Maintaining operational safety is paramount in wormhole space. Always
          keep your ship aligned to a celestial object or a designated safe spot
          when you're not stationary. This practice ensures you can warp out
          instantly at the first sign of danger. Regularly use the directional
          scanner (D-Scan) to monitor for enemy ships and probes that might be
          nearby. Establish multiple safe spots within systems to observe your
          surroundings and retreat quickly if needed. Equipping cloaking devices
          on suitable ships further enhances your ability to avoid detection,
          while varying your travel routes reduces the risk of ambushes.
        </p>
        <h3>Environmental Awareness</h3>
        <p>
          Understanding the environment is crucial for making informed
          decisions. Nullsec wormhole connections generally experience lower
          traffic, making their holes more suitable for PvE activities. However,
          exercise caution when engaging in PvE within systems that have
          multiple K162 connections, as these significantly increase the chances
          of encountering hostile players. Being aware of these environmental
          factors allows you to choose safer locations for your operations and
          reduces the likelihood of unexpected encounters.
        </p>
      </>
    ),
  },
  {
    id: 'market-hubs',
    title: 'Market Hubs and Jump Clones',
    content: (
      <>
        <h2 id='market-hubs'>Market Hubs and Jump Clones</h2>
        <p>
          Strategically placing your Jump Clones in major market hubs ensures
          that you can quickly return to key locations in known space. The most
          important market hubs in EVE Online are as follows:
        </p>
        <ol>
          <li>
            <strong>Jita IV - Moon 4 - Caldari Navy Assembly Plant:</strong>{' '}
            This is the premier trade hub in Caldari space and the most popular
            market in the game.
          </li>
          <li>
            <strong>Amarr VIII (Oris) - Emperor Family Academy:</strong> This is
            a major hub in Amarr space and serves as a secondary trading center.
          </li>
          <li>
            <strong>
              Dodixie IX - Moon 20 - Federation Navy Assembly Plant:
            </strong>{' '}
            This is the principal Gallente market hub.
          </li>
          <li>
            <strong>Rens VI - Moon 8 - Brutor Tribe Treasury:</strong> This is a
            key hub in Minmatar space.
          </li>
          <li>
            <strong>Hek VIII - Moon 12 - Boundless Creation Factory:</strong>{' '}
            This is another notable hub in Minmatar space.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 'skill-training',
    title: 'Skill Training and Implants',
    content: (
      <>
        <h2 id='skill-training'>Skill Training and Implants</h2>
        <h3>Essential Skill Training</h3>
        <p>
          Among the most crucial skills to develop is <strong>Biology V</strong>
          . This skill extends the duration of combat boosters and cerebral
          accelerators, offering substantial advantages in both combat and
          exploration scenarios. Investing in Biology V not only boosts your
          combat effectiveness but also prolongs the benefits of temporary
          enhancements, making it a key skill for sustained operations in
          wormhole space.
        </p>
        <h3>Attribute-Enhancing Implants</h3>
        <p>
          To further enhance your capabilities, consider equipping
          attribute-boosting implants that improve your overall performance:
        </p>
        <ul>
          <li>
            <strong>Ocular Filter</strong> – Enhances perception.
          </li>
          <li>
            <strong>Memory Augmentation</strong> – Boosts memory.
          </li>
          <li>
            <strong>Neural Boost</strong> – Increases willpower.
          </li>
          <li>
            <strong>Cybernetic Subprocessor</strong> – Improves intelligence.
          </li>
          <li>
            <strong>Social Adaptation Chip</strong> – Augments charisma.
          </li>
        </ul>
        <p>
          These implants provide a well-rounded boost to your core attributes,
          accelerating skill training and improving your effectiveness across
          various activities.
        </p>
        <h3>Exploration-Focused Implants</h3>
        <p>
          For those focused on exploration, the{' '}
          <strong>Poteque ‘Prospector’</strong> series of implants is
          invaluable. These implants include:
        </p>
        <ul>
          <li>
            <strong>Astrometric Rangefinding</strong> – Enhances scan strength.
          </li>
          <li>
            <strong>Astrometric Pinpointing</strong> – Reduces scan deviation.
          </li>
          <li>
            <strong>Astrometric Acquisition</strong> – Decreases scan time.
          </li>
        </ul>
        <p>
          Equipping these implants significantly enhances your scanning
          capabilities, allowing you to locate sites with greater speed and
          precision. For explorers, these implants are indispensable tools that
          improve both efficiency and success rates in wormhole space.
        </p>
      </>
    ),
  },
  {
    id: 'corporate-roles',
    title: 'Corporate Roles',
    content: (
      <>
        <h2 id='corporate-roles'>Corporate Roles</h2>
        <p>
          Each member of the corporation plays a specific role that contributes
          to the overall success of the group. Understanding and excelling in
          your role is key to thriving in wormhole space. The corporation has
          several key roles that members may fulfill:
        </p>
        <ul>
          <li>
            <strong>Scout:</strong> As a scout, you are responsible for scanning
            and locating wormholes and sites. Your role is critical in mapping
            out the wormhole network and identifying potential threats and
            opportunities.
          </li>
          <li>
            <strong>Combat Pilot:</strong> Combat pilots engage in both PvE and
            PvP, defending the corporation's assets and initiating attacks on
            enemy forces.
          </li>
          <li>
            <strong>Industrialist:</strong> Industrialists focus on mining,
            manufacturing, and resource management, ensuring that the
            corporation has the materials and supplies needed for sustained
            operations.
          </li>
          <li>
            <strong>Logistics Pilot:</strong> Logistics pilots provide remote
            repairs and support during fleet operations, playing a vital role in
            keeping combat pilots and other members of the fleet alive.
          </li>
          <li>
            <strong>Tackler:</strong> Tacklers specialize in immobilizing enemy
            ships during engagements, preventing them from escaping and allowing
            the fleet to secure kills.
          </li>
          <li>
            <strong>Bubbler:</strong> Bubblers deploy warp disruption fields to
            prevent enemy ships from escaping, especially during large fleet
            engagements.
          </li>
          <li>
            <strong>Electronic Warfare (EWar) Specialist:</strong> EWar
            specialists disrupt enemy ship functionalities through various
            jamming techniques, weakening their combat effectiveness and giving
            the corporation a tactical advantage.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'ewar',
    title: 'Electronic Warfare (EWAR)',
    content: (
      <>
        <h2 id='ewar'>Electronic Warfare (EWAR)</h2>
        <p>
          Electronic Warfare (EWAR) is a critical aspect of fleet combat,
          allowing you to disrupt and neutralize enemy ships effectively. Each
          faction in EVE Online has a specific type of EWar that is most
          effective against it. The ship background color in the overview can
          help you identify the faction:
        </p>
        <ul>
          <li>
            <strong>Amarr (Yellow Background):</strong> Use Radar jammers to
            disrupt Amarr ships.
          </li>
          <li>
            <strong>Caldari (Blue Background):</strong> Use Gravimetric jammers
            against Caldari ships.
          </li>
          <li>
            <strong>Gallente (Turquoise Background):</strong> Use Magnetometric
            jammers versus Gallente ships.
          </li>
          <li>
            <strong>Minmatar (Red Background):</strong> Use Ladar jammers to
            disrupt Minmatar ships.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'defense-tanking',
    title: 'Defense and Tanking',
    content: (
      <>
        <h2 id='defense-tanking'>Defense and Tanking</h2>
        <p>
          Optimizing your ship for combat requires a solid understanding of the
          preferred tanking methods and resistance vulnerabilities associated
          with each faction.
        </p>
        <h3>Preferred Tanking Methods by Faction</h3>
        <p>
          Each faction has a preferred tanking strategy that should guide your
          ship fittings:
        </p>
        <ul>
          <li>
            <strong>Amarr:</strong> Armor tanking is the primary method for
            Amarr ships, focusing on strong armor resistances and repair
            capabilities.
          </li>
          <li>
            <strong>Caldari:</strong> Caldari ships excel with shield tanking,
            prioritizing high shield resistances and rapid shield regeneration.
          </li>
          <li>
            <strong>Gallente:</strong> Gallente ships often utilize structure
            tanking, relying on their robust hull strength to absorb damage.
          </li>
          <li>
            <strong>Minmatar:</strong> Speed tanking is the cornerstone of
            Minmatar defense, leveraging agility and high-speed maneuvers to
            avoid taking damage altogether.
          </li>
        </ul>
        <h3>Resistance Weaknesses by Tank Type</h3>
        <p>
          Each tank type has specific vulnerabilities that must be considered
          when outfitting your ship:
        </p>
        <ul>
          <li>
            <strong>Shield Tank:</strong> Particularly susceptible to EM and
            Thermal damage, making it essential to bolster these resistances
            where possible.
          </li>
          <li>
            <strong>Armor Tank:</strong> Prone to Explosive and Kinetic damage,
            requiring extra attention to these resistances in your fittings.
          </li>
        </ul>
        <h3>Exploiting Factional Resistance Weaknesses</h3>
        <p>
          Understanding the resistance weaknesses of enemy factions allows you
          to tailor your offensive strategy for maximum effectiveness:
        </p>
        <table>
          <thead>
            <tr>
              <th>Faction</th>
              <th>Primary Weakness</th>
              <th>Secondary Weakness</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amarr</td>
              <td>Thermal damage</td>
              <td>EM damage</td>
            </tr>
            <tr>
              <td>Caldari</td>
              <td>EM damage</td>
              <td>Explosive damage</td>
            </tr>
            <tr>
              <td>Gallente</td>
              <td>Explosive damage</td>
              <td>EM damage</td>
            </tr>
            <tr>
              <td>Minmatar</td>
              <td>Kinetic damage</td>
              <td>Explosive damage</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 'conclusion',
    title: 'Conclusion',
    content: (
      <>
        <h2 id='conclusion'>Conclusion</h2>
        <p>
          Wormhole space presents some of the most challenging and rewarding
          opportunities in EVE Online. Navigating its complexities requires not
          only skill and preparation but also a deep understanding of the
          mechanics, strategies, and roles that define successful operations in
          this unpredictable environment.
        </p>
        <p>
          By following the guidelines outlined in this primer, you will be
          well-equipped to thrive in wormhole space, whether you're engaging in
          exploration, combat, or signature activities. Remember that success in
          wormhole space is as much about teamwork and adaptability as it is
          about individual skill. Always remain vigilant, communicate
          effectively with your corporation, and continuously refine your
          strategies based on experience and learning.
        </p>
        <p>
          As you venture beyond the event horizon, embrace the challenges that
          come your way, and let them sharpen your abilities and strengthen your
          resolve. The path to mastery in wormhole space is demanding, but with
          perseverance and the right knowledge, you will find great rewards in
          the depths of New Eden.
        </p>
      </>
    ),
  },
];
