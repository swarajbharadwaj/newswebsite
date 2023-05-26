import { advancedChatWindow } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <advancedChatWindow
        projectId={import.meta.env. VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;