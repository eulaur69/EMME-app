import React, { useState, useEffect, useRef } from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { WebView } from "react-native-webview";
import { Asset } from "expo-asset";
import { SafeAreaProvider } from "react-native-safe-area-context";

const openLink = (url) => {
  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    })
    .catch((err) => console.error("An error occurred", err));
};

const Stack = createStackNavigator();

const DetailsScreen1 = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ flex: 1, position: "relative", backgroundColor: "#fff" }}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.biggerButton}
            onPress={() =>
              openLink(
                "https://view.genially.com/691b4ef67a7c437b6cdbe578/interactive-content-chapter-1-game-geology"
              )
            }
          >
            <Text style={styles.biggerButtonText}>CHAPTER 1 GAME</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson1_1.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 1.1: Earth’s Building Materials
            </Text>
            <Text style={styles.description}>
              Learn about Earth's crust, minerals, rocks, and the rock cycle.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details1_1")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson1_2.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 1.2: Plate Tectonics and Mountain Building
            </Text>
            <Text style={styles.description}>
              Study how tectonic plates move, form mountains, and shape Earth's
              surface.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details1_2")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson1_3.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 1.3: Volcanoes and Earthquakes
            </Text>
            <Text style={styles.description}>
              Investigate the causes and effects of volcanic eruptions and
              earthquakes.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details1_3")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson1_4.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>Lesson 1.4: Deep Time and Fossils</Text>
            <Text style={styles.description}>
              Explore Earth's 4.5-billion-year history and the significance of
              fossils.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details1_4")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const DetailsScreen1_1 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1YT0oGuyMQ_xlVCd-tde8q9Khbqn5ZNAn/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen1_2 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1mqwE0UaZwB2ojkIhjOWcttCuRrdWeUal/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen1_3 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1pe4OjTSzVgNlekUssONimc4LEY8zNlLf/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen1_4 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1xKBmNJ4wHqeDqGuSnJVlvvEDqHLFw6In/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen2 = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ flex: 1, position: "relative", backgroundColor: "#fff" }}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.biggerButton}
            onPress={() =>
              openLink(
                "https://view.genially.com/691b501251b0ec732ec2b5c6/interactive-image-ecology-and-environment"
              )
            }
          >
            <Text style={styles.biggerButtonText}>CHAPTER 2 GAME</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson2_1.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 2.1: Nature Journaling and Observation
            </Text>
            <Text style={styles.description}>
              Develop observation skills by documenting plants, animals, and
              ecosystems in nature.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details2_1")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson2_2.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 2.2: Investigating Soil and Water
            </Text>
            <Text style={styles.description}>
              Study soil composition, water quality, and their importance in
              ecosystems.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details2_2")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson2_3.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 2.3: Nature-Based Art and Creativity
            </Text>
            <Text style={styles.description}>
              Create art using natural materials and explore the connection
              between art and nature.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details2_3")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson2_4.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 2.4: Culinary Adventures with Backyard Bounty
            </Text>
            <Text style={styles.description}>
              Identify and cook with edible plants, learning about sustainable
              food practices.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details2_4")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson2_5.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 2.5: Learning about Sustainable Gardening Practices and
              Permaculture
            </Text>
            <Text style={styles.description}>
              Discover sustainable gardening techniques and permaculture
              principles.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details2_5")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const DetailsScreen2_1 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1cyPPntK2NNit4SOipEYhnJW_cf3vSUdp/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen2_2 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1j9U1-eg3P91fVujiMTU6EDcCR88RaIJU/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen2_3 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1xpJ7BLOWyIqqIV0-roai-QzRiUOnR0w0/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen2_4 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1sK0RGc1SCLVSqvtSJKu22cxycWSZ5_wa/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen2_5 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1zm_pmZX24wD9NrP5X-UZJhTn31fgHLVs/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen3 = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ flex: 1, position: "relative", backgroundColor: "#fff" }}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.biggerButton}
            onPress={() =>
              openLink(
                "https://view.genially.com/691b501251b0ec732ec2b5c6/interactive-image-ecology-and-environment"
              )
            }
          >
            <Text style={styles.biggerButtonText}>CHAPTER 3 GAME</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson3_1.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 3.1: Memory of the Earth / Digne Declaration
            </Text>
            <Text style={styles.description}>
              Learn about geological heritage and the global effort to protect
              it.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details3_1")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson3_2.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 3.2: Geological Heritage – The Best Memories of the Earth /
              Management and Governance
            </Text>
            <Text style={styles.description}>
              Explore how geological sites are managed and protected.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details3_2")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson3_3.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 3.3: Geoparks – Unique Places of Earth’s and Human Memories
              to Be Discovered
            </Text>
            <Text style={styles.description}>
              Discover UNESCO Global Geoparks and their role in preserving
              Earth's history.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details3_3")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson3_4.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 3.4: Meet Your Geoparks – Examples of Geoparks from
              Romania, Portugal, Slovakia, and Croatia
            </Text>
            <Text style={styles.description}>
              Explore European Geoparks and their geological, cultural, and
              ecological significance.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details3_4")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const DetailsScreen3_1 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1EOnEl4c_EGZkT2nURpzkfkCuj_fp-0ja/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen3_2 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1tOK-nD_bNUSlYnyis08maoJFdRxIQ_ax/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen3_3 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1Q4A1ouP1tDkaB82_4TQljBvHhbuxlWEU/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen3_4 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1gMNOoquXk-oLotQ0gH2XpySHyg0hdMVA/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen4 = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ flex: 1, position: "relative", backgroundColor: "#fff" }}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.biggerButton}
            onPress={() => openLink("https://planeta42.com/archeology/m/")}
          >
            <Text style={styles.biggerButtonText}>CHAPTER 4 GAMES</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson4_1.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 4.1: The Dialogue Between Man and Earth – Local Raw
              Materials and Resources
            </Text>
            <Text style={styles.description}>
              Examine how humans use local resources like minerals, soil, and
              water.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details4_1")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson4_2.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 4.2: Stone-Made Objects – Geological, Anthropological, and
              Socio-Economic Stories of Rocks and Minerals
            </Text>
            <Text style={styles.description}>
              Study the cultural and economic significance of stone-made
              objects.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details4_2")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson4_3.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 4.3: Local Mythology Related to Earth Processes
            </Text>
            <Text style={styles.description}>
              Explore myths that explain natural phenomena like earthquakes and
              volcanoes.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details4_3")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson4_4.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 4.4: Stone-Made Objects in Local Archaeology and
              Architecture
            </Text>
            <Text style={styles.description}>
              Investigate the role of stone in ancient and modern structures.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details4_4")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const DetailsScreen4_1 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1vwuampTEEhPSJJ0iWnzOkFZOc3n3KCgV/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen4_2 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1emMZAN8y--pZB5zb5S6La8QPpHw8oGxL/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen4_3 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1FIVEfwErbl479wQJF4aoUBTt25NefADe/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen4_4 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1lKwDKJkSQpcEchBDjdicDfg6TXOiDGae/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen5 = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{ flex: 1, position: "relative", backgroundColor: "#fff" }}
    >
      <View style={styles.container}>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.biggerButton}
            onPress={() =>
              openLink("https://www.purposegames.com/tag/geomorphology")
            }
          >
            <Text style={styles.biggerButtonText}>CHAPTER 5 GAMES</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson5_1.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 5.1: Local Geomorphology – Introducing Landforms and
              Landscapes
            </Text>
            <Text style={styles.description}>
              Learn about landforms like mountains, valleys, and rivers, and how
              they form.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details5_1")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/lesson5_2.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>
              Lesson 5.2: Mapping the 4D Environment – 2D, 3D, and 4D
              Representations of Landforms and Objects
            </Text>
            <Text style={styles.description}>
              Explore mapping techniques to visualize landforms and their
              changes over time.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details5_2")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const DetailsScreen5_1 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/1-Uoj2IhAuUtQM-zdMzzEVA7deg13Cl5k/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const DetailsScreen5_2 = () => {
  const [pdfUri, setPdfUri] = useState(null);

  const publicPdfUrl =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";

  const googleDocsUrl = `https://drive.google.com/file/d/107CqYPY1oETdxhTbrEx5rm0hP0quv546/view?usp=drive_link`;

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: googleDocsUrl }}
        style={{ flex: 1 }}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loader}
          />
        )}
      />
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <View style={[styles.card, { alignItems: "center" }]}>
          <Text style={styles.title}>Meet your Geoparks!</Text>
          <View style={[styles.row, { gap: 20 }]}>
            <TouchableOpacity
              style={styles.circleButton}
              onPress={() =>
                openLink("https://www.hateggeoparc.ro/new/index.php/en/home/")
              }
            >
              <Image
                source={require("../assets/images/romania_flag.png")}
                style={styles.circleImage}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.circleButton}
              onPress={() =>
                openLink(
                  "https://www.azoresgeopark.com/geoparque_acores/?lang=EN"
                )
              }
            >
              <Image
                source={require("../assets/images/portugal_flag.png")}
                style={styles.circleImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/unit1.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>Geology and Paleontology</Text>
            <Text style={styles.description}>
              Explore the Earth's geological processes, from rock formation to
              plate tectonics, and uncover the history of life through fossils
              and deep time.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details1")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/unit2.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>Ecology and Biodiversity</Text>
            <Text style={styles.description}>
              Dive into the natural world, learning about ecosystems,
              biodiversity, and sustainable practices through hands-on
              activities and creative exploration.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details2")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/unit3.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>Environmental Stewardship</Text>
            <Text style={styles.description}>
              Understand the importance of preserving Earth's geological
              heritage and the role of geoparks in conservation, education, and
              sustainable development.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details3")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/unit4.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>Local History and Culture</Text>
            <Text style={styles.description}>
              Investigate how local resources, myths, and stone-made objects
              shape cultural identity and historical development.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details4")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={require("../assets/images/unit5.jpg")}
            style={styles.image}
          />
          <View style={styles.infoSection}>
            <Text style={styles.title}>Geomorphology</Text>
            <Text style={styles.description}>
              Study the formation of landforms, their evolution over time, and
              how they influence human activities and ecosystems.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Details5")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Show More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <TouchableOpacity
            style={styles.biggerButton}
            onPress={() =>
              openLink("https://www.footprintcalculator.org/home/en")
            }
          >
            <Text style={styles.biggerButtonText}>
              Carbon Footprint Calculator
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingBottom: "50" }}></View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

const HeaderText = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={require("../assets/images/emmeLogo.jpg")}
        resizeMode="cover"
        style={{ width: 30, height: 30, marginRight: 8 }}
      />
      <Text style={{ color: "black", fontSize: 20 }}>EMME</Text>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#fff",
          elevation: 0,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 5,
        },
        headerTintColor: "black",
      }}
    >
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Home",
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="Details1"
        component={DetailsScreen1}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details1_1"
        component={DetailsScreen1_1}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details1_2"
        component={DetailsScreen1_2}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details1_3"
        component={DetailsScreen1_3}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details1_4"
        component={DetailsScreen1_4}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details2"
        component={DetailsScreen2}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details2_1"
        component={DetailsScreen2_1}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details2_2"
        component={DetailsScreen2_2}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details2_3"
        component={DetailsScreen2_3}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details2_4"
        component={DetailsScreen2_4}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details2_5"
        component={DetailsScreen2_5}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details3"
        component={DetailsScreen3}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details3_1"
        component={DetailsScreen3_1}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details3_2"
        component={DetailsScreen3_2}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details3_3"
        component={DetailsScreen3_3}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details3_4"
        component={DetailsScreen3_4}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details4"
        component={DetailsScreen4}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details4_1"
        component={DetailsScreen4_1}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details4_2"
        component={DetailsScreen4_2}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details4_3"
        component={DetailsScreen4_3}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details4_4"
        component={DetailsScreen4_4}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details5"
        component={DetailsScreen5}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details5_1"
        component={DetailsScreen5_1}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
      <Stack.Screen
        name="Details5_2"
        component={DetailsScreen5_2}
        options={{
          headerTitle: () => <HeaderText />,
          headerTitleAlign: "center",
          title: "Details",
        }}
      />
    </Stack.Navigator>
  );
};
const styles = {
  container: {
    backgroundColor: "#fff",
    padding: 20,
    flex: 1,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
  },
  infoSection: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#777",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 0,
    alignItems: "center",
  },
  biggerButton: {
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 0,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  biggerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  lessonTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#2C3E50",
    marginLeft: 5,
  },
  lessonDescription: {
    fontSize: 16,
    color: "#7F8C8D",
    marginBottom: 15,
    marginLeft: 25,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  circleButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: "hidden", // makes the image circular
  },

  circleImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  column: {
    flexDirection: "column", // default, but explicit is fine
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },
};
export default TabNavigator;
