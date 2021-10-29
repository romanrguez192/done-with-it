import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import ProgressBar from "react-native-progress/Bar";
import LottieView from "lottie-react-native";

import { colors } from "../config/styles";

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <ProgressBar color={colors.primary} progress={progress} width={200} />
        ) : (
          <LottieView
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require("../assets/animations/done.json")}
            style={styles.animation}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 200,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UploadScreen;
