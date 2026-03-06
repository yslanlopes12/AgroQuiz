import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        AgroSustentável
      </Text>

      <Text style={styles.description}>
        Aprenda sobre agricultura sustentável através de um jogo educativo.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/IntroScreen")}
      >
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 10
  },

  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 40,
    color: "#555"
  },

  button: {
    backgroundColor: "#2E7D32",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  }

});