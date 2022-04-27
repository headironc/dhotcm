import { Input, Label, Text, View } from "@tarojs/components";

import "./index.scss";

export default function CustomInput({
  id,
  text,
  placeholder,
  name,
  value,
  message,
  disabled,
}) {
  return (
    <View className="form-line">
      <Label for={id} className="form-line-label">
        {text}
      </Label>
      <View className="form-input-box">
        <Input
          className="form-input"
          placeholder={placeholder}
          id={id}
          name={name}
          value={value}
          placeholderClass="placeholder-class"
          disabled={disabled}
        />
        {message && <Text className="input-message">{message}</Text>}
      </View>
    </View>
  );
}
