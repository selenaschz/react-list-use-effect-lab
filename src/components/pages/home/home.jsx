import { useState } from "react";
import { ContactList, ContactSearch } from "../../contacts"
import { PageLayout } from "../../layouts"

function Home() {
    const [filter, setFilter] = useState({});

    const onFilter = (filter) => setFilter(filter);

    return (
        <PageLayout>
            <ContactSearch filter={filter} onFilter={onFilter} />
            <ContactList filter={filter} />
        </PageLayout>
    );
}

export default Home;