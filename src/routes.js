import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const MainNavigator = createStackNavigator(
	{
		Main: { screen: Main },		
    },
	{
		initialRouteName: 'Main',
		headerMode: 'none',
	},
)





const router = createAppContainer(MainNavigator)

export default router