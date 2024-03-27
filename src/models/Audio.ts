type Audio = {
  id: bigint;
  user_id: bigint;
  title: string;
  url: string;
  text: string;
  words: string[];
  start_times: number[];
  end_times: number[];
  words_per_min: number;
  created_at: Date;
  updated_at: Date;
};

export default Audio;
