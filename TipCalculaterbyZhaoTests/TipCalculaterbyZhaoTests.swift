//
//  TipCalculaterbyZhaoTests.swift
//  TipCalculaterbyZhaoTests
//
//  Created by Zhaochang He on 5/11/16.
//  Copyright © 2016 Zhaochang He. All rights reserved.
//

import XCTest
@testable import TipCalculaterbyZhao

class TipCalculaterbyZhaoTests: XCTestCase {
    
    override func setUp() {
        super.setUp()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testTipControlHasTarget() {
        let viewController = ViewController()

        let tipControl = UISegmentedControl(items: ["18%", "20%", "25%"])
        // We need to have a dummy billField, otherwise the app will crash when trying to read `billField.text!`
        let billField = UITextField()
        viewController.tipControl = tipControl
        viewController.billField = billField

        // We need to instantiate the labels as well, otherwise the app will crash
        viewController.tipLabel = UILabel()
        viewController.totalLabel = UILabel()


        viewController.viewDidLoad()

        let actions = viewController.tipControl.actionsForTarget(viewController, forControlEvent: .ValueChanged)
        XCTAssertNotNil(actions)
        if let actions = actions {
            XCTAssertTrue(actions.contains("calculate:"))
        }
    }
    
    func testPerformanceExample() {
        // This is an example of a performance test case.
        self.measureBlock {
            // Put the code you want to measure the time of here.
        }
    }
    
}
