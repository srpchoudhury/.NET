// *************************************************************
// Copyright (c) 1991-2023 LEAD Technologies, Inc.
// All Rights Reserved.
// *************************************************************
//
//  LTHandle.h
//  Leadtools
//

NS_CLASS_AVAILABLE(10_10, 8_0)
@interface LTHandle : NSObject

- (nullable const void *)lock;
- (void)unlock;

@end
