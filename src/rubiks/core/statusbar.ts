
export const setFinish = (finish: boolean) => {
    const finishEle = document.getElementById("finish");
    if (finishEle) {
        finishEle!.innerText = finish ? "👏 good work!" : "🤔 hmmm";
    }
};
