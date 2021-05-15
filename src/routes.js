import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './Main';
import AddnewStudent from './AddnewStudent';
import AddnewCompany from './AddnewCompany';
import ListofStudents from './ListofStudents';
import ListofCompanies from './ListofCompanies';

const MainNavigator = createStackNavigator(
	{
		Main: { screen: Main },	
		AddnewStudent: {screen: AddnewStudent},	
		AddnewCompany: {screen: AddnewCompany},
		ListofCompanies: {screen: ListofCompanies},
		ListofStudents: {screen: ListofStudents},
    },
	{
		initialRouteName: 'Main',
		headerMode: 'none',
	},
)





const router = createAppContainer(MainNavigator)

export default router