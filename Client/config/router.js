import React, from 'react';
import { TabNavigator } from 'react-navigation';

import history from '../screens/history';
import addCard from '../screens/addCard';
import main from '../screens/main';


export const Tabs = TabNavigator ({
    main: {
        screen: main,
    },
    history: {
        screen: history,
    },
    addCard: {
        screen: addCard,
    },
});