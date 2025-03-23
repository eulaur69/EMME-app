import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView, View, Text, Image,TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home', 
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: false,
          title: 'Details',
        }}
      />
    </Stack.Navigator>
  );
};

const DetailsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, position: 'relative',backgroundColor: '#fff'}}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <AntDesign name="arrowleft" size={24} color="black" style={{marginLeft: 10, marginTop: 10,}} />
    </TouchableOpacity>
    <View style={styles.container}>

      <Text style={styles.lessonTitle}>Lesson 1.1: Earth’s Building Materials</Text>
      <Text style={styles.lessonDescription}>Learn about Earth's crust, minerals, rocks, and the rock cycle.</Text>

      <Text style={styles.lessonTitle}>Lesson 1.2: Plate Tectonics and Mountain Building</Text>
      <Text style={styles.lessonDescription}>Study how tectonic plates move, form mountains, and shape Earth's surface.</Text>

      <Text style={styles.lessonTitle}>Lesson 1.3: Volcanoes and Earthquakes</Text>
      <Text style={styles.lessonDescription}>Investigate the causes and effects of volcanic eruptions and earthquakes.</Text>

      <Text style={styles.lessonTitle}>Lesson 1.4: Deep Time and Fossils</Text>
      <Text style={styles.lessonDescription}>Explore Earth's 4.5-billion-year history and the significance of fossils.</Text>

    </View>
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
  return(
  <ScrollView style={styles.container}>
  <View style={styles.card}>
    <Image 
    source={ require('../assets/images/unit1.jpg') } 
    style={styles.image}
  />
  <View style={styles.infoSection}>
    <Text style={styles.title}>Geology and Paleontology</Text>
    <Text style={styles.description}>Explore the Earth's geological processes, from rock formation to plate tectonics, and uncover the history of life through fossils and deep time.</Text>
  </View>
  <TouchableOpacity onPress={() => navigation.navigate('Details')} style={styles.button}>
      <Text style={styles.buttonText}>Show More</Text>
  </TouchableOpacity>
  </View>
  </ScrollView>
  )
};
const Page2 = () => {
  return(
  <ScrollView style={styles.container}>
    
  </ScrollView>
  )
};

const HeaderText = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image 
        source={require('../assets/images/emmeLogo.jpg')}
        resizeMode="cover"
        style={{ width: 30, height: 30, marginRight: 8 }}
      />
      <Text style={{ color: "black", fontSize: 20 }}>
        EMME
      </Text>
    </View>
  );
};

const TabNavigator = () => {
  return(
  <Tabs.Navigator
    screenOptions={{
      headerShown: true,
      tabBarInactiveBackgroundColor: '#fff',
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: 'black',
      tabBarActiveBackgroundColor: 'green',
      tabBarStyle: {
        backgroundColor: '#fff',
        height: 50,
        borderTopWidth: 0,
        paddingBottom: 0,
      },
      headerStyle: {
        backgroundColor: '#fff',
        elevation: 0,
        borderBottomWidth: 0,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
      },
      headerTintColor: '#fff',
    }}
  >
    <Tabs.Screen
      name="home"
      component={HomeStack}
      options={{
        headerTitle: () => <HeaderText />,
        headerTitleAlign: 'center',
        title: "Home",
        tabBarIcon: ({ color }) => <AntDesign size={28} name="home" color={color} />,
      }}
    />
    <Tabs.Screen
      name="page2"
      component={Page2}
      options={{
        headerTitle: () => <HeaderText />,
        headerTitleAlign: 'center',
        title: "Page2",
        tabBarIcon: ({ color }) => <AntDesign size={28} name="setting" color={color} />,
      }}
    />
  </Tabs.Navigator>
  )
};

const styles = {
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  infoSection: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 0,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  lessonTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2C3E50',
    marginLeft: 5,
  },
  lessonDescription: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 15,
    marginLeft: 25,
  },
};

export default TabNavigator;