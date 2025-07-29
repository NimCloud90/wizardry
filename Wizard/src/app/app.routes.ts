import { Routes } from '@angular/router';
import { TitlePage } from "./title-page/title-page"; 
import { PlayerAuth } from './player/charsel/player-auth/player-auth';
import { Charsel } from './player/charsel/charsel';
import { Village } from './story/village/village';
import { Forest } from './story/forest/forest';
import { Dungeon } from './story/dungeon/dungeon';
import { CreateAccount } from './player/charsel/player-auth/create-account/create-account';

export const routes: Routes = [

    {
        path: '',
        component: TitlePage,
        children: [

            {path: '', component: PlayerAuth},

            {path: 'create-account',
                loadComponent: () =>
                    import('./player/charsel/player-auth/create-account/create-account').then(
                        (m) => m.CreateAccount
                ),
            },


            {path: 'charsel', component: Charsel},

            {path: 'village', component: Village},

            {path: 'forest', component: Forest},

            {path: 'dungeon', component: Dungeon}
            
        ]
    }
];