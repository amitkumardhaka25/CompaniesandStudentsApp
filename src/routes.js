import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './Main';
import AddnewStudent from './AddnewStudent';
import AddnewCompany from './AddnewCompany';
import ListofStudents from './ListofStudents';
import ListofCompanies from './ListofCompanies';
import ImagePickerfunction from './ImagePicker';

//you need to import all files in here to set them into stacknavigator so that you can use them.
//You can not navigate into another file without using stacknavigator
const MainNavigator = createStackNavigator(
	{
		Main: { screen: Main },	
		AddnewStudent: {screen: AddnewStudent},	
		AddnewCompany: {screen: AddnewCompany},
		ListofCompanies: {screen: ListofCompanies},
		ListofStudents: {screen: ListofStudents},
		ImagePickerfunction: {screen:ImagePickerfunction}
    },
	{
		//initial Route Name is the front page that will be shown in our app
		initialRouteName: 'Main',
		//If you want an header into your main file you can either create a header and call that header into that particular file or you can call it there
		//You can google it, how to set header in headermod.....
		headerMode: 'none',
	},
)





const router = createAppContainer(MainNavigator)

export default router