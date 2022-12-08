

export interface IWord {
    name: string;
    definitions : [
        {
            definition : string,
            definitionType : string,
            exampleSentence : string
        }
    ]
}