declare global {
  interface Window {
    api: {
      getAllData: () => Promise<
        { title: string; url: string; iconUrl?: string }[]
      >;
      getData: (
        id: string
      ) => Promise<{ title: string; url: string; iconUrl?: string }>;
      addData: (data: {
        title: string;
        url: string;
        iconUrl?: string;
      }) => Promise<boolean>;
      editData: (
        id: string,
        data: { title: string; url: string; iconUrl?: string }
      ) => Promise<boolean>;
      deleteData: (id: string) => Promise<boolean>;
      //
      on: (channel: string, event: () => void) => void;
    };
  }
}
export default global;
