export const submitUserFrom = async (form: any): Promise<{ result: string}> => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({ result: "OK" });
    }, 2000);
  });
};
