const LazyComponent = (props) => {
    const { component } = props;
    if (component) {
        let Cop = component;
        return (
            <Cop />
        );
    }
}
export default LazyComponent;