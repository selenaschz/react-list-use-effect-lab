import ContactList from "../../contacts/contact-list/contact-list";
import { PageLayout } from "../../layouts"

function Home() {
    return (
        <PageLayout>
            <ContactList />
        </PageLayout>
    );
}

export default Home;