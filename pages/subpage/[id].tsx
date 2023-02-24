import * as console from 'console';

interface Props {
    status: string;
}

const DummyPage = ({status}: Props) => {
    return (
        <h1>
            {status}
        </h1>
    )
};

export async function getServerSideProps({query, req}: any) {
    const { id } = query;

    const proto =
        req.headers['x-forwarded-proto'] || req.connection.encrypted
            ? 'https'
            : 'http';

    const url = `${proto}://${process.env.HOST}/api/${id}`;
    console.log(url);
    const status = await fetch(url)
        .then((res) => res.json())
        .then((res) => res.status)
        .catch(error => {
            console.log(error)
        });
    return { props: { status } };
}

export default DummyPage;
