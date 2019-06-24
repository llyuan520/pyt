export const TEST_CONST = 'TEST_CONST';

export function testAction() {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          dispatch({
            type: TEST_CONST,
            testRes: 'value'
          });
          resolve('ljz');
        }, 1000);
      } catch (e) {
        console.log(e);
      }
    });
  };
}

export const actions = {
  testAction
};
