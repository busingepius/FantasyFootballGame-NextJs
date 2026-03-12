'use client';

import Layout from '@/components/layouts';
import { appConfigs } from '@/constants/configs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ReactElement } from 'react';

export default function RulesPage() {
  return (
    <div className="min-h-screen text-white flex flex-col">
      
      <section className="flex py-16 flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-secondary via-secondary to-white">
        <img
          src={appConfigs.logo}
          alt={`${appConfigs.appName} Logo`}
          className="w-32 h-32 mb-6 rounded-lg shadow-lg bg-white object-contain"
        />
        <h1 className="text-5xl font-extrabold mb-3 text-main">{appConfigs.appName ?? 'Fantasy Football'}</h1>
        <h2 className="text-3xl font-bold mb-6 leading-tight text-gray-300 uppercase">Official Game Rules</h2>
        
      </section>

      <section className="py-12 px-4 w-full md:w-8/12 mx-auto">
        <Accordion type="multiple" className="space-y-4 w-full">
          <AccordionItem value="squad-selection" className='w-full bg-secondary' >
            <AccordionTrigger className="text-left text-lg font-semibold text-main px-4">Squad Selection</AccordionTrigger>
            <AccordionContent className="text-gray-300 text-sm space-y-2 bg-white p-4 text-secondary">
              <div className='mb-4'>
                <p className='font-bold text-red-800 mb-2'>Squad Size</p>
                <p className='mb-2'>To join the game select a fantasy football squad of 15 players, consisting of:</p>
                <ul className='pl-8 list-disc	'>
                  <li className='mb-1'>2 Goalkeepers</li>
                  <li className='mb-1'>5 Defenders</li>
                  <li className='mb-1'>5 Midfielders</li>
                  <li className='mb-1'>3 Forwards</li>
                </ul>
              </div>
              <div className='mb-4'>
                <p className='font-bold text-red-800 mb-2'>Budget</p>
                <p>The total value of your initial squad must not exceed £100 million.</p>
              </div>
              <div className='mb-4'>
                <p className='font-bold text-red-800 mb-2'>Players Per Team</p>
                <p>You can select up to 3 players from a single real-world team.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="managing-your-squad" className='w-full bg-secondary' >
            <AccordionTrigger className="text-left text-lg font-semibold text-main px-4">Managing Your Squad</AccordionTrigger>
            <AccordionContent className="text-gray-300 text-sm space-y-2 bg-white p-4 text-secondary">
              <div className='mb-4'>
                <p className='font-bold  text-red-800 mb-2'>Choosing Your Starting 11</p>
                <p className='mb-2'>From your 15 player squad, select 11 players by the Gameweek deadline to form your team.</p>
                <p className='mb-2'>All your points for the Gameweek will be scored by these 11 players, however if one or more doesn't play they may be automatically substituted.</p>
                <p className='mb-2'>Your team can play in any formation providing that 1 goalkeeper, at least 3 defenders and at least 1 forward are selected at all times.</p>

              </div>
              <div className='mb-4'>
                <p className='font-bold text-red-800 mb-2'>Selecting a Captain and a Vice-Captain</p>
                <p className='mb-2'>From your starting 11 you nominate a captain and a vice-captain. Your captain's score will be doubled.</p>
                <p className='mb-2'>If your captain plays 0 minutes in the Gameweek, the captain will be changed to the vice-captain.</p>
                <p className='mb-2'>If both captain and vice-captain play 0 minutes in a Gameweek, then no player's score will be doubled.</p>

              </div>
              <div className='mb-4'>
                <p className='font-bold text-red-800 mb-2'>Prioritising Your Bench For Automatic Substitutions</p>
                <p className='mb-2'>Your substitutes provide cover for unforeseen events like injuries and postponements by automatically replacing starting players who don't play in a Gameweek.</p>
                <p className='mb-2'>Playing in a Gameweek means playing at least 1 minute or receiving a yellow / red card.</p>
                <p className='mb-2'>Based on the priorities you assign, automatic substitutions are processed at the end of the Gameweek as follows:</p>
                <ul className='pl-8 list-disc	'>
                  <li className='mb-2'>If your Goalkeeper doesn't play in the Gameweek, he will be substituted by your replacement Goalkeeper, if he played in the Gameweek.</li>
                  <li>If any of your outfield players don't play in the Gameweek, they will be substituted by the highest priority outfield substitute who played in the Gameweek and doesn't break the formation rules (eg. If your starting team has 3 defenders, a defender can only be replaced by another defender).</li>
                </ul>
              </div>

            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="transfers" className='w-full bg-secondary' >
            <AccordionTrigger className="text-left text-lg font-semibold text-main px-4">Transfers</AccordionTrigger>
            <AccordionContent className="text-gray-300 text-sm space-y-2 bg-white p-4 text-secondary">

              <div className='mb-4'>
                <p className='mb-2'>After selecting your squad you can buy and sell players in the transfer market. Unlimited transfers can be made at no cost until your first deadline.</p>
                <p className='mb-2'>After your first deadline you will receive 1 free transfer each Gameweek. Each additional transfer you make in the same Gameweek will deduct 4 points from your total score (Classic scoring) and match score (Head-to-Head scoring) at the start of the next Gameweek.</p>

                <p className='mb-2'>If you do not use your free transfer, you are able to make an additional free transfer the following Gameweek. If you do not use this saved free transfer in the following Gameweek, it will be carried over until you do. The maximum number of free transfers you can store in any gameweek is 5.</p>
                <p className='mb-2'>At other times you are limited to 20 transfers in any single Gameweek. This rule does not apply when playing a Wildcard or a Free Hit Chip.</p>

              </div>
              <div className='mb-4'>
                <p className='font-bold text-red-800'>Wildcards</p>
                <p>For information on wildcards please refer to the chips section of the rules.</p>
              </div>
              <div className='mb-4'>
                <p className='font-bold text-red-800'>Player Prices</p>
                <p className='mb-2'>Player prices change during the season dependent on the popularity of the player in the transfer market. Player prices do not change until the season starts.</p>
                <p className='mb-2'>The price shown on your transfers page is a player's selling price. This selling price may be less than the player's current purchase price as a sell-on fee of 50% (rounded up to the nearest £0.1m) will be applied on any profits made on that player.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="chips" className='w-full bg-secondary' >
            <AccordionTrigger className="text-left text-lg font-semibold text-main px-4">Chips</AccordionTrigger>
            <AccordionContent className="text-gray-300 text-sm space-y-2 bg-white p-4 text-secondary">
              <div className='mb-4'>
                <p className='mb-2'>Chips can be used to potentially enhance your team's performance during the season.</p>
                <p className='mb-2'>Only one chip can be played in a single Gameweek. The chips available are as follows:</p>
                <div className='p-4 bg-mid-gray rounded'>
                  <div className='grid grid-cols-4 text-gray-400'>
                    <span className='col-span-1'>Name</span>
                    <span className='col-span-3 '>Effect</span>
                  </div>
                  <div className='grid grid-cols-4 py-2'>
                    <span className='col-span-1 text-red-800'>Bench Boost</span>
                    <span className='col-span-3 '>The points scored by your bench players in the next Gameweek are included in your total.</span>
                  </div>
                  <div className='grid grid-cols-4 py-2'>
                    <span className='col-span-1 text-red-800'>Free Hit</span>
                    <span className='col-span-3 '>Make unlimited free transfers for a single Gameweek. At the next deadline your squad is returned to how it was at the start of the Gameweek.</span>
                  </div>
                  <div className='grid grid-cols-4 py-2'>
                    <span className='col-span-1 text-red-800'>Triple Captain</span>
                    <span className='col-span-3 '>Your captain points are tripled instead of doubled in the next Gameweek.</span>
                  </div>
                  <div className='grid grid-cols-4'>
                    <span className='col-span-1 text-red-800'>Wildcard</span>
                    <span className='col-span-3 '>All transfers (including those already made) in the Gameweek are free of charge.</span>
                  </div>
                </div>

              </div>
              <div className='mb-4'>
                <p className='mb-2'>The Bench Boost and Triple Captain chips can each be used once a season and are played when saving your team on the my team page. They can be cancelled at anytime before the Gameweek deadline.</p>
                <p className='mb-2'>The Free Hit chip can be used once a season, is played when confirming your transfers and can't be cancelled after confirmed.</p>
                <p className='mb-2'>The Wildcard chip can be used twice a season. The first wildcard will be available from the start of the season until Sun 29 Dec 15:00. The second wildcard will be available after Sun 29 Dec 15:00 in readiness for the January transfer window opening and remain available until the end of the season. The Wildcard chip is played when confirming transfers and can't be cancelled once played.</p>
                <p className='mb-2'>Please note that when playing either a Wildcard or your Free Hit chip, any saved free transfers are maintained for the following Gameweek. If you had 2 saved free transfers, you will still have 2 saved free transfers the Gameweek after playing the chip.</p>
                <p className='mb-2'>The Assistant Manager can be used once a season and is played when confirming the transfer of your chosen manager. Excluding the initial transfer in, any subsequent changes to your manager will cost a saved transfer. Once the third gameweek has concluded, your manager will leave the team and the price you paid will return to your budget. See the ‘NEW’ section for more information.</p>

              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="scoring" className='w-full bg-secondary' >
            <AccordionTrigger className="text-left text-lg font-semibold text-main px-4">Scoring</AccordionTrigger>
            <AccordionContent className="text-gray-300 text-sm space-y-2 bg-white p-4 text-secondary">
              <div className='mb-4'>
                <p className='mb-2'>During the season, your fantasy football players will be allocated points based on their performance in real-world matches.</p>
                <div className="p-4 bg-mid-gray rounded">
                  <div className="grid grid-cols-10 text-gray-400 mb-2">
                    <span className="col-span-9">Action</span>
                    <span className="col-span-1">Points</span>
                  </div>

                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">For playing up to 60 minutes</span>
                    <span className="col-span-1 text-green-600">1</span>
                  </div>
                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">For playing 60 minutes or more (excluding stoppage time)</span>
                    <span className="col-span-1 text-green-600">2</span>
                  </div>
                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">For each goal scored by a goalkeeper</span>
                    <span className="col-span-1 text-green-600">10</span>
                  </div>
                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">For each goal scored by a defender</span>
                    <span className="col-span-1 text-green-600">6</span>
                  </div>
                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">For each goal scored by a midfielder</span>
                    <span className="col-span-1 text-green-600">5</span>
                  </div>
                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">For each goal scored by a forward</span>
                    <span className="col-span-1 text-green-600">4</span>
                  </div>
                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">For each goal assist</span>
                    <span className="col-span-1 text-green-600">3</span>
                  </div>
                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">For a clean sheet by a goalkeeper or defender</span>
                    <span className="col-span-1 text-green-600">4</span>
                  </div>
                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">For a clean sheet by a midfielder</span>
                    <span className="col-span-1 text-green-600">1</span>
                  </div>
                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">For every 3 shot saves by a goalkeeper</span>
                    <span className="col-span-1 text-green-600">1</span>
                  </div>
                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">For each penalty save</span>
                    <span className="col-span-1 text-green-600">5</span>
                  </div>
                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">For each penalty miss</span>
                    <span className="col-span-1 text-red-600">-2</span>
                  </div>
                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">Bonus points for the best players in a match</span>
                    <span className="col-span-1 text-green-600">1~3</span>
                  </div>
                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">For every 2 goals conceded by a goalkeeper or defender</span>
                    <span className="col-span-1 text-red-600">-1</span>
                  </div>
                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">For each yellow card</span>
                    <span className="col-span-1 text-red-600">-1</span>
                  </div>
                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">For each red card</span>
                    <span className="col-span-1 text-red-600">-3</span>
                  </div>
                  <div className="grid grid-cols-10 py-1">
                    <span className="col-span-9">For each own goal</span>
                    <span className="col-span-1 text-red-600">-2</span>
                  </div>
                </div>

              </div>
              <div className='mb-4'>
                <p className='font-bold text-red-800 mb-2'>Clean sheets</p>
                <p className='mb-2'>A clean sheet is awarded for not conceding a goal whilst on the pitch and playing at least 60 minutes (excluding stoppage time).</p>
                <p className='mb-2'>If a player has been substituted when a goal is conceded this will not affect any clean sheet bonus.</p>
              </div>
              <div className='mb-4'>
                <p className='font-bold text-red-800 mb-2'>Red Cards</p>
                <p className='mb-2'>If a player receives a red card, they will continue to be penalised for goals conceded by their team.</p>
                <p className='mb-2'>Red card deductions include any points deducted for yellow cards.</p>
              </div>
              <div className='mb-4'>
                <p className='font-bold text-red-800 mb-2'>Assists</p>
                <p className='mb-2'>Fantasy assists are awarded to the player from the goal scoring team who last touches the ball before their teammate who scores the goal. The final touch can be an intentional pass, an inadvertent touch, or the result of an effort on goal.</p>
                <p className='mb-2'>If an opposing player deflects the ball after the final pass before a goal is scored, significantly altering the intended destination of the ball, then no assist in Fantasy is awarded. Should an unforced defensive error lead to the goalscoring opportunity, then no Fantasy assist will be awarded. If the goal scorer loses and then regains possession, then no assist is awarded.</p>
              </div>
              <div className='mb-4'>
                <p className='font-bold text-red-800 mb-2'>Rebounds</p>
                <p className='mb-2'>If a shot at goal is blocked by an opposition player, saved by a goalkeeper, or hits the woodwork, and from the rebound a goal is scored, then a Fantasy assist is awarded. The shot does not have to be on target to result in a Fantasy assist. The action leading to the rebound can be a shot or a cross-shot, but not an intended cross or pass attempt, as determined by Stats Perform.</p>
                <p className='mb-2'>If a significant touch is made by an opposition player after the blocked effort, then no Fantasy assist is awarded.</p>
              </div>
              <div className='mb-4'>
                <p className='font-bold text-red-800 mb-2'>Own Goals</p>
                <p className='mb-2'>If a player shoots or passes the ball and directly forces an opposing player to put the ball in their own net, then an assist is awarded. If the pass or cross takes a significant deflection off an opposition player prior to their teammate scoring an own goal, then no Fantasy assist is awarded.</p>
              </div>
              <div className='mb-4'>
                <p className='font-bold text-red-800 mb-2'>Penalties and Free-Kicks</p>
                <p className='mb-2'>In the event of a penalty or free-kick being scored, the player earning the penalty or free-kick is awarded a Fantasy assist. However, if the goal is scored by the player who earned the penalty or free-kick, then no Fantasy assist is awarded.</p>
              </div>
              <div className='mb-4'>
                <p className='font-bold text-red-800 mb-2'>Finalising Assists</p>
                <p className='mb-2'>For the avoidance of doubt, points awarded in-game are subject to change up until one hour after the final whistle of the last match of the Gameweek. Once the points have all been updated on that day, no further adjustments to points will be made unless under extraordinary circumstances.</p>
                <p className='mb-2'>The final decision on Fantasy assists is made by Fantasy Premier League in consultation with Stats Perform.</p>
              </div>
              <div className='mb-4'>
                <p className='font-bold text-red-800 mb-2'>Bonus Points</p>
                <p className='mb-2'>The Bonus Points System (BPS) utilises a range of statistics to create a BPS score for every player. The three best performing players in each match will be awarded bonus points. 3 points will be awarded to the highest scoring player, 2 to the second best and 1 to the third.</p>
                <p className='mb-2'>Examples of how bonus point ties will be resolved are as follows:</p>
                <ul className='pl-8 list-disc	'>
                  <li className='mb-2'>If there is a tie for first place, Players 1 & 2 will receive 3 points each and Player 3 will receive 1 point.</li>
                  <li className='mb-2'>If there is a tie for second place, Player 1 will receive 3 points and Players 2 and 3 will receive 2 points each.</li>
                  <li>If there is a tie for third place, Player 1 will receive 3 points, Player 2 will receive 2 points and Players 3 & 4 will receive 1 point each.</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>  
      </section>
    </div>
  );
}

RulesPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout hideSidebar>{page}</Layout>;
};
