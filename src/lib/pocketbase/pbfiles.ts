interface Props {
    collectionId: string;
    recordId: string;
    file: string;
  }
  
  export const pbfiles = ({ collectionId, recordId, file }: Props) => {
    return `${process.env.NEXT_PUBLIC_POCKETBASE_API_URL}/api/files/${collectionId}/${recordId}/${file}`;
  };
  