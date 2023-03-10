class ApiDemosPage {
	public actionBarText: string;

	constructor() {
		this.actionBarText = 'API Demos';
	}

	public get actionBar() {
		return $('//android.view.ViewGroup[@resource-id="android:id/action_bar"]');
	}

	public get actionBarTitle() {
		return $(
			'//android.view.ViewGroup[@resource-id="android:id/action_bar"]/android.widget.TextView'
		);
	}

	public get appMenu() {
		return $('//android.widget.TextView[@content-desc="App"]');
	}

	public get activityMenu() {
		return $('//android.widget.TextView[@content-desc="Activity"]');
	}

	public get softInputModesMenu() {
		return $('//android.widget.TextView[@content-desc="Soft Input Modes"]');
	}

	public get softInputModesDesc() {
		return $(
			'//android.widget.TextView[@content-desc="Shows how different soft input modes impact application resizing due to an input method."]'
		);
	}

	public get resizeMode() {
		return $(
			'//android.widget.Spinner[@resource-id="io.appium.android.apis:id/resize_mode"]'
		);
	}

	public get resizeModeText() {
		return $(
			'//android.widget.Spinner[@resource-id="io.appium.android.apis:id/resize_mode"]/android.widget.TextView[@resource-id="android:id/text1]'
		);
	}

	public get panMode() {
		return $('//android.widget.CheckedTextView[@text="Pan"]');
	}

	public get unspecifiedMode() {
		return $('//android.widget.CheckedTextView[@text="Unspecified"]');
	}

	public get redBox() {
		return $(
			'//android.widget.TextView[@content-desc="This is a part of the application\'s UI that can resize to adjust for the IME."]'
		);
	}

	public get greenBox() {
		return $(
			'//android.widget.EditText[@resource-id="io.appium.android.apis:id/saved"]'
		);
	}

	public async waitForActionBarShown(): Promise<boolean | void> {
		return this.actionBar.waitForDisplayed({
			timeout: 20000,
		});
	}

	public generateMockText(amount: number): string {
		let mockText = '';
		for (let i = 1; i <= amount; i++) {
			mockText += `${i}. Here is the new text!${i < amount ? '\n' : ''}`;
		}
		return mockText;
	}
}

export default new ApiDemosPage();
