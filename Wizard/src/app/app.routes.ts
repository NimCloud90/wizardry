import { Routes } from '@angular/router';
import { TitlePage } from "./title-page/title-page"; 
import { PlayerAuth } from './player/charsel/player-auth/player-auth';
import { Charsel } from './player/charsel/charsel';
import { Village } from './story/village/village';
import { Forest } from './story/forest/forest';
import { Dungeon } from './story/dungeon/dungeon';
import { CreateAccount } from './player/charsel/player-auth/create-account/create-account';
import { Dungeon2 } from './story/dungeon/dungeon-2';
import { Village2 } from './story/village/village-2';
import path from 'path';
import { Component } from '@angular/core';
import { Fight } from './story/forest/fight';
import { FightWithWords } from './story/forest/fight-with-words';
import { Kiss } from './story/forest/kiss';
import { Run } from './story/forest/run';
import { Forest2 } from './story/forest/forest-2';
import { UnionBoy } from './story/forest/union-boy';
import { GetEm } from './story/forest/get-em';
import { Talk } from './story/forest/talk';
import { Left } from './story/dungeon/left';
import { Meander } from './story/dungeon/meander';
import { ThroneRoom } from './story/throne-room/throne-room';
import { SnailLove } from './story/dungeon/snail-love';
import { SnailFight } from './story/dungeon/snail-fight';
import { Surrender } from './story/dungeon/surrender';
import { GoodEnd } from './story/throne-room/good-end';
import { BadEnd } from './story/throne-room/bad-end';
import { Salamander } from './story/throne-room/salamander';
import { Fire } from './story/throne-room/fire';
import { Flee } from './story/throne-room/flee';
import { Befriend } from './story/throne-room/befriend';
import { Combat } from './story/throne-room/combat';
import { Cow } from './story/throne-room/cow';
import { Death } from './story/throne-room/death';
import { Door } from './story/throne-room/door';
import { Trapped } from './story/throne-room/trapped';
import { Converse } from './story/throne-room/converse';
import { Union } from './story/forest/union';
import { UnionTwo } from './story/forest/union-2';
import { Maim } from './story/forest/maim';


export const routes: Routes = [

    
            {path: '', component: TitlePage,},

            {path: 'player-auth', component: PlayerAuth},

            {path: 'create-account', component: CreateAccount},

            {path: 'charsel', component: Charsel},

            {path: 'village', component: Village},

            {path: 'village-2', component: Village2},

            {path: 'forest', component: Forest},

            {path: 'fight', component: Fight},

            {path: 'fight-with-words', component: FightWithWords},

            {path: 'kiss', component: Kiss},

            {path: 'run', component: Run},

            {path: 'forest-2', component: Forest2},

            {path: 'union-boy', component: UnionBoy},

            {path: 'get-em', component: GetEm},

            {path: 'talk', component: Talk},

            {path: 'dungeon', component: Dungeon},
            
            {path: 'dungeon-2', component: Dungeon2},

            {path: 'left', component: Left},

            {path: 'meander', component: Meander},

            {path: 'snail-love', component: SnailLove},

            {path: 'snail-fight', component: SnailFight},
            
            {path: 'surrender', component: Surrender},

            {path: 'throne-room', component: ThroneRoom},

            {path: 'good-end', component: GoodEnd},

            {path: 'bad-end', component: BadEnd},

            {path: 'salamander', component: Salamander},

            {path: 'fire', component: Fire},

            {path: 'flee', component: Flee},

            {path: 'befriend', component: Befriend},

            {path: 'combat', component: Combat},

            {path: 'cow', component: Cow},

            {path: 'death', component: Death},

            {path: 'door', component: Door},

            {path: 'trapped', component: Trapped},

            {path: 'converse', component: Converse},

            {path: 'union', component: Union},

            {path: 'union-2', component: UnionTwo},

            {path: 'maim', component: Maim}
];