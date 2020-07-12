import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import BarcodeScan from './src/pages/Barcode';
import BarcodeDis from './src/pages/BarcodeDis';

const Stack = createStackNavigator();
NavBar = (props) => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{/* Get BarcodeScan*/}
				<Stack.Screen
					name="BarcodeScan"
					options={{
						title: 'BarcodeScan',
						headerShown: false
					}}
				>
					{(props) => <BarcodeScan {...props} />}
				</Stack.Screen>

				{/* Get BarcodeDis*/}
				<Stack.Screen
					name="BarcodeDis"
					options={{
						title: 'BarcodeDis',
						headerShown: false
					}}
				>
					{(props) => <BarcodeDis {...props} />}
				</Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default NavBar;
