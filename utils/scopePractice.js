// Closure

const dividedBy = (x) => {
    return function (y) {
        return y / x;
    };
};

export default dividedBy;
