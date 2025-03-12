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
} from "react-native";
import { useRouter } from "expo-router";
import {
  EyeIcon,
  EyeSlashIcon,
  XMarkIcon,
} from "react-native-heroicons/outline";
import DateTimePicker from "@react-native-community/datetimepicker";

const ResetPassword = () => {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  // Handle input changes
  const handleChange = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // Handle Signup submission
  const handleUpdatePassword = () => {
    console.log("Signing up with:", form);
    // TODO: Implement authentication logic here
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 justify-center px-6 bg-gray-900">
        {/* Header */}
        <Text className="text-white text-2xl font-bold mb-6 text-center">
          Update your password
        </Text>

        {/* Input Fields */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {/* Password Input with Toggle */}
          <View className="flex-row items-center bg-gray-800 rounded-lg mb-4">
            <TextInput
              className="flex-1 text-white p-4 rounded-lg"
              placeholder="Enter your new password"
              placeholderTextColor="#bbb"
              secureTextEntry={!showPassword}
              value={form.password}
              onChangeText={(value) => handleChange("password", value)}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="p-4"
            >
              {showPassword ? (
                <EyeSlashIcon size={20} color="#bbb" />
              ) : (
                <EyeIcon size={20} color="#bbb" />
              )}
            </TouchableOpacity>
          </View>

          {/* Confirm Password */}
          <View className="flex-row items-center bg-gray-800 rounded-lg mb-4">
            <TextInput
              className="flex-1 text-white p-4 rounded-lg"
              placeholder="Re-enter your password"
              placeholderTextColor="#bbb"
              secureTextEntry={!showConfirmPassword}
              value={form.confirmPassword}
              onChangeText={(value) => handleChange("confirmPassword", value)}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              className="p-4"
            >
              {showConfirmPassword ? (
                <EyeSlashIcon size={20} color="#bbb" />
              ) : (
                <EyeIcon size={20} color="#bbb" />
              )}
            </TouchableOpacity>
          </View>

          {/* Signup Button */}
          <TouchableOpacity
            onPress={handleUpdatePassword}
            className="bg-blue-600 rounded-lg p-4 mb-4"
          >
            <Text className="text-white text-center text-lg font-semibold">
              Update Password
            </Text>
          </TouchableOpacity>

          {/* Login Link */}
          {/* <View className="flex-row justify-center mt-6">
            <Text className="text-gray-400 text-md">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push("/auth/login")}>
              <Text className="text-blue-500 text-md font-bold ml-1">
                Login
              </Text>
            </TouchableOpacity>
          </View> */}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResetPassword;
