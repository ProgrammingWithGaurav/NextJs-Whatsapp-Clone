import { Avatar, IconButton, Button } from "@mui/material";
import styled from "styled-components";
import * as EmailValidator from 'email-validator';

// Icons
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

import { auth, db } from "../firebase";
import { useRouter } from "next/router";
import { useCollection } from 'react-firebase-hooks/firestore';
import Chat from "./Chat";
import { useAuthState } from "react-firebase-hooks/auth";


function Sidebar() {
    const [user] = useAuthState(auth);

    const userChatRef = db
        .collection("chats")
        .where("users", "array-contains", user.email);

    const [chatsSnapshot] = useCollection(userChatRef);
    const router = useRouter();
    const createChat = () => {
        const input = prompt('Please enter an email address for the user you wish to chat with');

        if (!input) return null;

        if (EmailValidator.validate(input) && !chatAlreadyExists(input) && input !== user.email) {
            db.collection('chats').add({
                users: [user.email, input],

            })
        }
    }


    const chatAlreadyExists = (recipientEmail) =>
        !!chatsSnapshot?.docs.find(
            (chat) =>
                chat.data().users.find((user) => user === recipientEmail)?.length > 0
        );
    return (
        <Container>
            <Header>
                <UserAvatar src={user.photoURL} onClick={() => {
                    auth.signOut();
                }} />
                <IconsContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </IconsContainer>
            </Header>

            <Search>
                <SearchIcon />
                <SearchInput placeholder='Search in chats' />
            </Search>

            <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>

                {chatsSnapshot?.docs.map(chat => (
                    <Chat
                        key={chat.id}
                        id={chat.id}
                        users={chat.data().users}
                    />
                ))}
        </Container>
    )
}

export default Sidebar

const Container = styled.div`

`

const Header = styled.div`
    display: flex;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 1px solid whitesmoke;
`


const UserAvatar = styled(Avatar)`
    cursor: pointer;
    
    :hover{
        opacity: 0.8;

    }
`

const IconsContainer = styled.div`
    display: flex;
`

const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 2px;
`

const SidebarButton = styled(Button)`
    width: 100%;
    &&& {
        border-top: 1px solid whitesmoke;
        border-bottom: 1px solid whitesmoke;
    }
`

const SearchInput = styled.input`
    outline-width: 0;
    border: none;
    flex: 1;
`