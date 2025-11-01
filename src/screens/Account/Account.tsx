import { useContext, useEffect, useState } from "react"
import { Pressable, Text, View } from "react-native"
import { ThemeContext } from "../../../contexts/ThemeContext/ThemeContext"
import { Header } from "../../components/Header/_Header";
import { connect } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addUser, editUserName, User, userSelector } from "../../reducers/userReducer";

export const Account = ( ) => {
    const { theme } = useContext( ThemeContext );
    const [ users, setUsers ] = useState<Array<User>>([]);

    const selectedUsers = useAppSelector(userSelector);
    const dispatch = useAppDispatch( );

    useEffect(( ) => {
        setUsers(selectedUsers);
    }, [ selectedUsers ]);

    const handleChangeUserName = ( ) => {
        dispatch( editUserName({ email: '', id: '', name: "Talisson" }) );
    }

    return (
        <View
        style={{
            width: "100%",
            height: "100%",
            backgroundColor: theme.colors.surface.primary
        }}>
            <View
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}>
                <Header screenName="Account" title="Account" key={"Account"} />

                <View
                style={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: "yellow"
                }}>
                    <Text>Users</Text>
                    {
                        users.map((user) => (
                            <Text
                                key={user.id}
                                >{ user.name }
                            </Text>
                        ))
                    }

                    <Pressable
                    style={{
                        paddingLeft: 30,
                        paddingRight: 30,
                        paddingBottom: 20,
                        paddingTop: 20,
                        backgroundColor: "green"
                    }}
                    onPress={ handleChangeUserName }>
                        <Text>Change name</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

