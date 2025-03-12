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
import { useRouter, useLocalSearchParams } from "expo-router";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { identifier } = useLocalSearchParams();

  // Validate OTP input
  const isValidOtp = () => {
    if (otp.trim().length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return false;
    }
    return true;
  };

  // Handle OTP Verification
  const handleVerifyOtp = async () => {
    if (!isValidOtp()) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Fake delay

      // Navigate to Reset Password Screen
      router.push({ pathname: "/auth/reset-password", params: { identifier } });
    } catch (error) {
      alert("Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 justify-center px-6 bg-gray-900">
        <Text className="text-white text-2xl font-bold mb-6 text-center">
          Verify OTP
        </Text>
        <Text className="text-gray-400 text-md text-center mb-4">
          Enter the 6-digit code sent to {identifier}
        </Text>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* OTP Input */}
          <TextInput
            className="bg-gray-800 text-white p-4 rounded-lg mb-4 text-center text-lg tracking-widest"
            placeholder="Enter OTP"
            placeholderTextColor="#bbb"
            keyboardType="numeric"
            maxLength={6}
            value={otp}
            onChangeText={setOtp}
          />

          {/* Verify Button */}
          <TouchableOpacity
            onPress={handleVerifyOtp}
            className="bg-blue-600 rounded-lg p-4"
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-white text-center text-lg font-semibold">
                Verify & Continue
              </Text>
            )}
          </TouchableOpacity>

          {/* Resend OTP */}
          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-400 text-md">
              Didn’t receive a code?
            </Text>
            <TouchableOpacity onPress={() => alert("Resending OTP...")}>
              <Text className="text-blue-500 text-md font-bold ml-1">
                Resend
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Verify;
