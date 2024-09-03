import React, {useState} from "react";
import { View, CheckBox} from "react-native";

function Check( { toggleTheme } ){
    const [acess, setAcess] = useState(true);

    
    const handleChangeAcess = () => {
      setAcess(!acess);
      toggleTheme();
    };

    return(
        <View style={{width: "50%"}}>
          <CheckBox
            isChecked={acess}
            onClick={handleChangeAcess}
            uncheckedCheckBoxColor="grey"
            checkedCheckBoxColor="#54B8E5"
            leftTextoP="Tema Claro"
            leftTextStyle={{ marginLeft: 30, fontSize: 20 }}
          />
          <CheckBox
            isChecked={!acess}
            onClick={handleChangeAcess}
            uncheckedCheckBoxColor="grey"
            checkedCheckBoxColor="#54B8E5"
            leftText="Tema Escuro"
            leftTextStyle={{ marginLeft: 30, fontSize: 20 }}
          />
        </View>
    )
}

export default Check;