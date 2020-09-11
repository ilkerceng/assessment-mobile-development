import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import FormTypes from "../../screens/Forms/types";

interface Props extends FormTypes.Choice {
  key: number | string;
  formData: any;
  onValidation: (e: { [key: string]: string }) => void;
  items: FormTypes.ChoiceSelectItem[];
  onChange: (e: any[]) => void;
  placeholder?: string;
}

const Select = (props: Props) => {
  const { items }: { items: FormTypes.ChoiceSelectItem[] } = props;
  const [selectedItems, setSelectedItems] = useState<
    FormTypes.ChoiceSelectItem[]
  >([]);
  let [itemsMap, setItemsMap] = useState<{
    [key: string]: { selected: boolean; name: string; id: string | number };
  }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    items.forEach((item) => {
      itemsMap[item.id] = {
        selected: false,
        name: item.name,
        id: item.id,
      };
    });

    return () => {};
  }, [props.items]);

  const onItemPress = (id: string | number) => {
    let newSelectedItems;
    if (props.multiple) {
      itemsMap = {
        ...itemsMap,
        [id]: { ...itemsMap[id], selected: !itemsMap[id].selected },
      };

      newSelectedItems = Object.values(itemsMap).filter(
        ({ selected }) => selected
      );

      setSelectedItems(newSelectedItems);
      setItemsMap(itemsMap);
    } else {
      items.forEach((item) => {
        let selected = false;
        if (item.id === id) {
          selected = true;
          setIsModalOpen(false);
        }
        itemsMap[item.id] = {
          selected,
          name: item.name,
          id: item.id,
        };
      });

      newSelectedItems = Object.values(itemsMap).filter(
        ({ selected }) => selected
      );

      setSelectedItems(newSelectedItems);
      setItemsMap(itemsMap);
    }

    props.onChange(
      newSelectedItems.map(
        ({ selected, ...selectedItemAttrs }) => selectedItemAttrs
      )
    );
  };

  const selectedItemsText =
    selectedItems && selectedItems.length > 0
      ? selectedItems
          .map(({ id, name }) => {
            return name;
          })
          .join(", ")
      : "";

  return (
    <>
      <TouchableOpacity
        style={{
          width: "100%",
          minHeight: 40,
          borderWidth: 1,
          justifyContent: "center",
        }}
        onPress={() => setIsModalOpen(!isModalOpen)}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 3,
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, flexWrap: "nowrap" }}>
            <Text>{selectedItemsText || props.placeholder}</Text>
          </View>
          <View>
            <AntDesign
              name={isModalOpen ? "downcircleo" : "upcircleo"}
              size={32}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isModalOpen ? (
        <ScrollView
          style={{
            marginTop: 2,
            marginBottom: 2,
            flex: 1,
            maxHeight: 100,
            borderWidth: 1,
          }}
        >
          {items.map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => onItemPress(item.id)}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: 3,
                    alignItems: "center",
                    minHeight: 40,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text>{item.name}</Text>
                  </View>

                  {props.multiple ? (
                    itemsMap[item.id].selected ? (
                      <View>
                        <AntDesign name={"checkcircleo"} size={32} />
                      </View>
                    ) : null
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      ) : null}
    </>
  );
};

Select.defaultProps = {
  placeholder: "Select...",
};

export default Select;

const styles = StyleSheet.create({});
