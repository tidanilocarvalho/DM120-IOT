import Content from "./Content";

export default class With {

    private _thing: string; 
    private _created: string; 
    private _content: Content; 
    private _date: string; 
    private _time: string;

    private _umidMin: string;
    private _umidMax: string;
    private _tempMin: string;
    private _tempMax: string;
    private _lumMin: string;
    private _lumMax: string;

    private _ligthColor: string;
    private _lightFelling: string;

    private _buzzerOn: boolean;

    constructor(thing: string, 
        created: string, 
        content: Content, 
        date: string, 
        time: string, 
        umidMin: string, 
        umidMax: string,
        tempMin: string, 
        tempMax: string,
        lumMin: string, 
        lumMax: string,
        lightColor: string,
        lightFeeling: string,
        buzzerOn: boolean) {
		this._thing = thing;
		this._created = created;
		this._content = content;
		this._date = date;
        this._time = time;
        this._umidMin = umidMin;
        this._umidMax = umidMax;
        this._tempMin = tempMin;
        this._tempMax = tempMax;
        this._lumMin = lumMin;
        this._lumMax = lumMax;
        this._ligthColor = lightColor;
        this._lightFelling = lightFeeling;
        this._buzzerOn = buzzerOn;
    }

    /**
     * Getter thing
     * @return {string}
     */
	public get thing(): string {
		return this._thing;
	}

    /**
     * Getter created
     * @return {string}
     */
	public get created(): string {
		return this._created;
	}

    /**
     * Getter content
     * @return {Content}
     */
	public get content(): Content {
		return this._content;
	}

    /**
     * Getter date
     * @return {string}
     */
	public get date(): string {
		return this._date;
	}

    /**
     * Getter time
     * @return {string}
     */
	public get time(): string {
		return this._time;
	}

    /**
     * Setter thing
     * @param {string} value
     */
	public set thing(value: string) {
		this._thing = value;
	}

    /**
     * Setter created
     * @param {string} value
     */
	public set created(value: string) {
		this._created = value;
	}

    /**
     * Setter content
     * @param {Content} value
     */
	public set content(value: Content) {
		this._content = value;
	}

    /**
     * Setter date
     * @param {string} value
     */
	public set date(value: string) {
		this._date = value;
	}

    /**
     * Setter time
     * @param {string} value
     */
	public set time(value: string) {
		this._time = value;
	}


    /**
     * Getter umidMin
     * @return {string }
     */
	public get umidMin(): string  {
		return this._umidMin;
	}

    /**
     * Getter umidMax
     * @return {string }
     */
	public get umidMax(): string  {
		return this._umidMax;
	}

    /**
     * Setter umidMin
     * @param {string } value
     */
	public set umidMin(value: string ) {
		this._umidMin = value;
	}

    /**
     * Setter umidMax
     * @param {string } value
     */
	public set umidMax(value: string ) {
		this._umidMax = value;
	}

    /**
     * Getter tempMin
     * @return {string }
     */
	public get tempMin(): string  {
		return this._tempMin;
	}

    /**
     * Getter tempMax
     * @return {string }
     */
	public get tempMax(): string  {
		return this._tempMax;
	}

    /**
     * Getter lumMin
     * @return {string }
     */
	public get lumMin(): string  {
		return this._lumMin;
	}

    /**
     * Getter lumMax
     * @return {string }
     */
	public get lumMax(): string  {
		return this._lumMax;
	}

    /**
     * Setter tempMin
     * @param {string } value
     */
	public set tempMin(value: string ) {
		this._tempMin = value;
	}

    /**
     * Setter tempMax
     * @param {string } value
     */
	public set tempMax(value: string ) {
		this._tempMax = value;
	}

    /**
     * Setter lumMin
     * @param {string } value
     */
	public set lumMin(value: string ) {
		this._lumMin = value;
	}

    /**
     * Setter lumMax
     * @param {string } value
     */
	public set lumMax(value: string ) {
		this._lumMax = value;
	}

    /**
     * Getter ligthColor
     * @return {string}
     */
	public get ligthColor(): string {
		return this._ligthColor;
	}

    /**
     * Setter ligthColor
     * @param {string} value
     */
	public set ligthColor(value: string) {
		this._ligthColor = value;
	}

    /**
     * Getter lightFelling
     * @return {string}
     */
	public get lightFelling(): string {
		return this._lightFelling;
	}

    /**
     * Setter lightFelling
     * @param {string} value
     */
	public set lightFelling(value: string) {
		this._lightFelling = value;
	}

    /**
     * Getter buzzerOn
     * @return {boolean}
     */
	public get buzzerOn(): boolean {
		return this._buzzerOn;
	}

    /**
     * Setter buzzerOn
     * @param {boolean} value
     */
	public set buzzerOn(value: boolean) {
		this._buzzerOn = value;
	}

}