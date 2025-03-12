import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

const ForgotPassword = () => {
  const [identifier, setIdentifier] = useState(""); // Accepts email or username
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Validate input
  const isValidInput = () => {
    if (!identifier.trim()) {
      alert("Please enter your email or username.");
      return false;
    }

    // Validate email format if it's an email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (identifier.includes("@") && !emailRegex.test(identifier)) {
      alert("Please enter a valid email.");
      return false;
    }

    return true;
  };

  // Handle Forgot Password request
  const handleForgotPassword = async () => {
    if (!isValidInput()) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Fake delay

      // Navigate to Verify Screen
      router.push({ pathname: "/auth/verify", params: { identifier } });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 justify-center px-6 bg-gray-900">
        <Text className="text-white text-2xl font-bold mb-6 text-center">
          Forgot Password
        </Text>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* Email or Username Input */}
          <TextInput
            className="bg-gray-800 text-white p-4 rounded-lg mb-4"
            placeholder="Enter your email or username"
            placeholderTextColor="#bbb"
            autoCapitalize="none"
            keyboardType="email-address"
            value={identifier}
            onChangeText={setIdentifier}
          />

          {/* Submit Button */}
          <TouchableOpacity
            onPress={handleForgotPassword}
            className="bg-blue-600 rounded-lg p-4"
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-white text-center text-lg font-semibold">
                Continue
              </Text>
            )}
          </TouchableOpacity>

          {/* Back to Login */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-400 text-md">
              Remembered your password?
            </Text>
            <TouchableOpacity onPress={() => router.push("/auth/login")}>
              <Text className="text-blue-500 text-md font-bold ml-1">
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;
