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
    
];